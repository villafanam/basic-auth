'use strict';

require('dotenv').config();
const { sequelizeDatabase } = require('./src/auth/models');
const { start } = require('./src/server');

sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful Connection!');
    start();
  })
  .catch((e) => console.error('Could not start server', e.message));

