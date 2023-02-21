'use strict';

require('dotenv').config();
const { Sequelize, DataTypes} = require('sequelize');

const Users = require('./users-model');

// if sqlite::memory does not work, use sqlite:memory
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;

// db singleton
const sequelizeDatabase = new Sequelize(DATABASE_URL);

const userModel = Users(sequelizeDatabase, DataTypes);

module.exports = {sequelizeDatabase, userModel};