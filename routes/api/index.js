const router = require('express').Router();
const apiTestRoute = require('./apiTestRoute');

// remove later
router.use('/apitest', apiTestRoute);
// ------------------------

module.exports = router;
