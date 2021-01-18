const express = require('express');
const router = express.Router();
const path = require('path');

const inventoryList = path.join(__dirname, '../data/inventory.json');
const functions = require('../utilities/functions');

router.get('/', (req, res) => {
  res.json(functions.getDataByList(inventoryList));
});

router.get('/:id', (req, res) => {
  res.json(functions.getDataByID(req.params.id, inventoryList));
});

module.exports = router;