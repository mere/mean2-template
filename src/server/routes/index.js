var express = require('express');
var router = express.Router();

// Controller Routes
router.use('/api/sample', require('./sample'));

// Homepage route
router.get('/', function (req, res, next) {
    res.render('index', {title: 'YOUR APPLICATION TITLE HERE'});
});

module.exports = router;
