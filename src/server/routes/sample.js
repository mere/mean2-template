var express = require('express');
var router = express.Router();
var SampleUser = require('../models/sample');


// GET /api/sample/:email
router.get('/:email', function (req, res) {
    if (!req.params.email) res.status(400);

    SampleUser.getSampleUser(req.params.email, function (su) {
        if (!su) res.status(404);
        res.json(su);
    });
});

module.exports = router;
