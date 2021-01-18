const express = require('express');
const app = express();
const cors = require('cors');
const inventoryRoutes = require('./routes/inventory');
const storeRoutes = require('./routes/stores');

const port = 8080;

app.use(cors());
app.use(express.json());
app.use('/inventory', inventoryRoutes);
app.use('/stores', storeRoutes);


app.get('/', (req, res) => {
  res.json({
    routes: [
      {
        method: 'get',
        endpoint: '/inventory',
      },
      {
        method: 'get',
        endpoint: '/inventory/:id',
      },
      {
        method: 'get',
        endpoint: '/stores',
      },
      {
        method: 'get',
        endpoint: '/stores/:id',
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
});