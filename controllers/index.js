var express = require('express');
var router = express.Router();

// API base entry point
// router.use('/', require(''));

router.get('/', (req, res) => {
    req.app.render(req, res, '/')
})

module.exports = router;