const Model = require("../database/index")

const controller = {
  get: (req, res) => {
    Model.findOne({id: 1})
      .then(
      data => res.status(200).send(data)
      // data => console.log(data)
      )
      .catch(err => console.error(err))
  },
  getLoc: (req, res) => {
    const { loc } = req.params;
    Model.find({"propertyInfo.location": loc}).skip(200000).limit(1)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send(err));
  }
}

module.exports = controller;

