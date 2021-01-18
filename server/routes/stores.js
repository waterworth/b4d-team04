const express = require('express');
const router = express.Router();
const path = require('path');

const storeList = path.join(__dirname, '../data/stores.json');
const functions = require('../utilities/functions');

router.get('/', (req, res) => {
  res.json(functions.getDataByList(storeList));
});

router.get('/:id', (req, res) => {
  res.json(functions.getDataByID(req.params.id, storeList));
});

module.exports = router;