const House = require('../database/index.js');

const controller = {
  get: (req, res) => {
    const {id} = req.params;
    House.findOne({where:{id}})
    .then(data => res.status(200).send(data))
    .catch(err => console.error(err))
  },
  post: (req, res) => {
    House.create(req.body)
    .then(data => res.status(201).send('Posted!'))
    .catch(err => console.error(err))
  },
  update: (req, res) => {
    const {id} = req.params;
    House.update({id})
    .then(data => res.status(202).send('Updated!'))
    .catch(err => console.error(err))
  },
  delete: (req, res) => {
    const {id} = req.params;
    House.delete({id})
    .then(data => res.status(203).send('deleted'))
    .catch(err => console.error(err))
  },
  getLoc: (req, res) => {
    const {location} = req.body;
    House.findOne({offset: 200000, where:{location}})
    .then(data => res.status(200).send(data))
    .catch(err => console.error(err))
  }
}

module.exports = controller;