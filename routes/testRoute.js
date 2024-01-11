// remove file 
const router = require('express').Router();

router.get('/', (req, res) => {
    return res.send('/test endpoint');
});

module.exports = router;