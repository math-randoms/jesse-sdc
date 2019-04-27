const Sequelize = require('sequelize')
const sequelize = require('./index.js')

const HouseDescriptions = sequelize.define('housedescriptions', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  propertyInfo: {
    type: Sequelize.JSON,
    allowNull: true
  },
  beds: {
    type: Sequelize.JSON,
    allowNull: true
  },
  amenities: {
    type: Sequelize.JSON,
    allowNull: true
  },
  numBaths: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  host: {
    type: Sequelize.JSON,
    allowNull: true
  },
  summary: {
    type: Sequelize.JSON,
    allowNull: true
  },
  __v: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

HouseDescriptions.sync({ force: true }).then(() => 
  // Now the `users` table in the database corresponds to the model definition
  console.log('CONNECTED TO POSTGRESQL')
);

module.exports = HouseDescriptions;