const fs = require('fs');

function getDataByList(dataFile) {
  const data = fs.readFileSync(dataFile);
  return JSON.parse(data);
}

function getDataByID(id, dataFile) {
  const dataArray = getDataByList(dataFile);
  let filteredArray = JSON.stringify(dataArray.filter((item) => item.id === id));
  if (filteredArray.length) {
    return JSON.parse(filteredArray);
  } else {
    return `No data found with ID: ${id}`;
  } 
}

module.exports = { getDataByList, getDataByID };