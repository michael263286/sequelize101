var express = require('express');
var router = express.Router();

const bcrypt = require('bcrypt')
const models = require('../models')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/register', function(req, res, next) {
  res.render('user-register')
});

router.post('/register', (req, res) => {
  // get information from req.body
  const { username, password } = req.body
  if (!username || !password) {
    res.send('Please include required fields')
    return
  }
  // check if all inputs are valid
  models.Customer.findOne({
    where: { username: username }
  })
  .then(user => {
    // username/email already taken
    if (user) {
      res.send('Username already taken')
      return
    }
    // hash password
    bcrypt.hash(password, 10)
      .then(hash => {
        // send information to database
        models.Customer.create({
          username,
          password: hash
        })
          .then(customer => {
            // send user to correct place w/ message
            res.redirect('/users/login')
          })
      })
  })
})

router.get('/login', (req,res)=>{
  res.render('user-login')
})

router.post('/login', async (req,res)=>{
  //get details from req.body
  const{username,password}=req.body //the same as const username = req.body.username
  if(!username||!password){
    res.send('all fields required')
    return
  }
  //find user
  const user = await models.Customer.findOne({
    where: {username:username}
  })
  //is there a user
  if(!user){
    res.send('username not found')
    return
  }

  //compare password to hash
  const passwordIsCorrect = await bcrypt.compare(password,user.password)
  if(!passwordIsCorrect){
    res.send('password is not correct')
    return
  }
  //set customer information on sessions
req.session.customer = user
  //redirect to home
  res.redirect('/dashboard')
})

router.get('/logout',(req,res)=>{
  //remove customer details from session
  req.session.customer = null
  //redirect back to login
  res.redirect('/users/login')
})


module.exports = router;
