var express = require('express');
var router = express.Router();

// Controller Routes
//router.use('/routepath', require('./path/to/route'));

// Homepage route
router.get('/', function (req, res, next) {
    res.render('index', {title: 'MEAN2'});
});

module.exports = router;

