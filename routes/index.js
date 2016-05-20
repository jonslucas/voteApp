
const router = require('express').Router();
/*
 * GET home page.
 */
router.get('/', (req, res, next)=>{
  res.render('layout'); //render layout.html
});


module.exports = router;