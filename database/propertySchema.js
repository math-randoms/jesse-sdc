var mongoose = require('mongoose');

let propertySchema = mongoose.Schema ({
  id: { type: Number, index: true, unique: true },
  propType: String, 
  title: String, 
  location: {type: String, index: true},
  numGuests: Number,
  beds: {quantity: Number, bedType: Array, iconUrl: Array},
  amenities: {basic: Array, notIncluded: Array, iconUrl: Array},
  numBaths: Number,
  host: { name: String, pictureUrl: String },
  summary: Array // or String
});

// id: { type: Number, index: true, unique: true },
//db.properties.createIndex({"propertyInfo.location": 1})
 
module.exports = propertySchema;

