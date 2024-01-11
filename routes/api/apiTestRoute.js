// remove file 
const router = require('express').Router();

router.get('/', (req, res) => {
    return res.send('api/apitest endpoint');
});

module.exports = router;
