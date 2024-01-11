const router = require('express').Router();
const apiRoutes = require('./api');

// remove later
const testRoute = require('./testRoute')
router.use('/test', testRoute);
// ------------------------

router.use('/api', apiRoutes);

router.use((req, res) => {
    return res.send('Not a valid route!');
});

module.exports =  router;