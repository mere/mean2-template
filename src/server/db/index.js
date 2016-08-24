var mongoose = require('mongoose');
var config = require('../config/config');


// Create the database connection
var dbURI = config.database.dbURI;
var options = {
    user: config.database.username,
    pass: config.database.password,
    server: {
        auto_reconnect: true
    }
};

var connectWithRetry = function () {
    return mongoose.connect(dbURI, options, function (err) {
        if (err) {
            console.error('No connection to MongoDB server - retrying in 5 sec', err);
            mongoose.disconnect();
            setTimeout(connectWithRetry, 5000);
        }
    });
};

connectWithRetry();


// CONNECTION EVENTS
// -- When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});

// -- If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
    mongoose.disconnect();
    connectWithRetry();
});

// -- When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

// -- If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
    try {
        mongoose.connection.close(function () {
            console.log('Mongoose default connection disconnected through app termination');
        });
    } catch (err) {
        console.log('Mongoose failed to close connection during app termination');
    }

    process.exit(0);
});