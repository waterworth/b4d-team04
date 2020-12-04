const express = require('express');
const app = express();
const cors = require('cors');

const port = 8080;

app.use(cors());
app.use(express.json());

app.use('/static', express.static('public'));

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
});
