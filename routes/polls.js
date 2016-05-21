const router = require('express').Router();

router.get('/', (req, res, next)=>{
    res.render('Some filler text');
});

module.exports = router;