var Sequelize = require('sequelize');

if(process.env.DATABASE_URL){
  var sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres'
  });
} else {
  var sequelize = new Sequelize('foorumi', '', '', {
    dialect: 'sqlite',
    storage: 'db/database.sqlite'
  });
}

module.exports = {
  DataTypes: Sequelize,
  sequelize: sequelize
};
