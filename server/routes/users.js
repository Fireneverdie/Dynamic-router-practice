var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('handle request from 5173...')
  res.send('access success');
});


router.post('/login',(req,res) =>{
  console.log(req.body)
  const {username} = req.body
  if(username === 'admin') res.send('admin')
    else res.send('reader')
  
})



module.exports = router;
