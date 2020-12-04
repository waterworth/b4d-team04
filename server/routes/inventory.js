const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const inventoryList = path.join(__dirname, '../data/inventory.json');

function getInventoryData() {
  const data = fs.readFileSync(inventoryList);
  return JSON.parse(data);
}

router.get('/', (req, res) => {
  res.json(getInventoryData());
});

module.exports = router;