'use strict';

const express = require('express');
const router = express.Router();
const basicAuth = require('./middleware/basic');
const Users = require('./models/');

const bcrypt = require('bcrypt');
//const base64 = require('base-64');

// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup username=john password=foo
router.post('/signup', async (req, res) => {

  try 
  {
    const { username, password } = req.body;
    console.log('username: ', username, 'password: ', password);
    const encryptedPassword = await bcrypt.hash(password, 10);
    const record = await Users.create({
      username, 
      password: encryptedPassword,
    });
    res.status(200).json(record);
  } 
  catch (e) 
  { 
    res.status(403).send('Error Creating User'); 
  }
});


// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
router.post('/signin', basicAuth, (req, res) => {
  let {user} = req.user;
  res.status(200).send({user});

});

module.exports = router;