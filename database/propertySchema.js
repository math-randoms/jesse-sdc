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