const express = require('express');
//const basicAuth = require('./auth/middleware/basic');
const userRouter = require('./auth/router'); 
const PORT = process.env.PORT || 3002;

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);


// Signup Route -- create a new user
// Two ways to test this route with httpie
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup username=john password=foo
// app.post('/signup', async (req, res) => {

//   try {
//     req.body.password = await bcrypt.hash(req.body.password, 10);
//     const record = await Users.create(req.body);
//     res.status(200).json(record);
//   } catch (e) { res.status(403).send('Error Creating User'); }
// });


// Signin Route -- login with username and password
// test with httpie
// http post :3000/signin -a john:foo
// app.post('/signin', basicAuth, (req, res) => {
//   res.status(200).send(req.user);
// });


const start = () => {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
};

module.exports = {start, app};