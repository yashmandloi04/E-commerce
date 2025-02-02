let router = require('express').Router();
let City = require('../Models/CityStateModel')

router.get('/getstate', async (req, res) => {
  let allState = await City.distinct('state')
  res.send(allState)
});

router.get('/getcity/:state', async (req, res) => {
  let allState = await City.find({'state': req.params.state})
  res.send(allState)
});

module.exports = router