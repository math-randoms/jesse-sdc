const Sequelize = require('sequelize')
const sequelize = require('./index.js')

// let propertySchema = mongoose.Schema({
//   id: { type: Number, index: true, unique: true },
//   propertyInfo: { propType: String, title: String, location: String, numGuests: Number },
//   beds: { quantity: Number, bedType: Array, iconUrl: Array },
//   amenities: { basic: Array, notIncluded: Array, iconUrl: Array },
//   numBaths: Number,
//   host: { name: String, pictureUrl: String },
//   summary: Array // or String
// });

// create index locationIndex on housedescriptions using btree (location);
//drop index locationIndex;
// create index locationIndex on housedescriptions using hash (location);

const HouseDescriptions = sequelize.define('housedescriptions', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  propType: {
    type: Sequelize.STRING,
    allowNull: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true
  },
  location: {
    type: Sequelize.STRING,
    allowNull: true
  },
  numGuests: {
    type: Sequelize.INTEGER,
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