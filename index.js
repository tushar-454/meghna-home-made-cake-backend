const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 4000;
const routes = require('./Routes');
const ConnectDB = require('./Database/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('./Middleware/logger');
const globalError = require('./Error/globalError');

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(logger);
app.use(routes);
app.use(globalError);

app.get('/health', (req, res) => {
  res.json({ message: 'Api health is fine' });
});

ConnectDB(process.env.URI)
  .then(() => {
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
    app.listen(port, () => {
      console.log(`Server is running on  http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
