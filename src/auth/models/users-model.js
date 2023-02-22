'use strict';
const bcrypt = require('bcrypt');

const userSchema = (sequelizeDatabase, DataTypes) => {
  const model = sequelizeDatabase.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  // sequelize allows ua to interact with the usermodel before adding data to the database using the beforeCreate hook.
  model.beforeCreate(async (user) => {
    let hashedPassword = await bcrypt.hash(user.password, 5);
    console.log('hashed password in before create', hashedPassword);
    user.password = hashedPassword;
  });

  return model;

};

module.exports = userSchema;

