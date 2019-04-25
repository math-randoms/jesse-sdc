const Property = require('./index.js');

getPropertyHelper = (num) => Property.find({id:num}).limit(1)
// getPropertyHelper = () => Property.findOne()
// getPropertyHelper = () => Property.find({})


module.exports = getPropertyHelper