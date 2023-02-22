require('dotenv').config();
const express = require('express');
const userRouter = require('./auth/router'); 
const PORT = process.env.PORT || 3002;

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.use(userRouter);


const start = () => {
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
};

module.exports = {start, app};