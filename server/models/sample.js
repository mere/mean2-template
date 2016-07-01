var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var sampleUserSchema = new Schema( {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true }
    },
    { collection: 'directreports' }
);

/**
 * Retrieves a user by email address.
 *
 * @param   {String}    email   - The ID of the managing employee.
 * @param   {Function}  cbFunc  - A callback function that will be passed the direct reports entity.
 *                                Function prototype: cbFunc(directReports)
 */
sampleUserSchema.statics.getSampleUser = function (email, cbFunc) {
    var query = this.findOne()
        .where('email', email.toLowerCase())
        .select('-_id');

    query.exec(function (err, user) {
        cbFunc(user);
    });
};


var SampleUser = mongoose.model('SampleUser', sampleUserSchema);
module.exports = SampleUser;
