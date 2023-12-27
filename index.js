const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 4000;

app.get('/health', (req, res) => {
  res.json({ message: 'Api health is fine' });
});

app.listen(port, () => {
  console.log(`Server is running on  http://localhost:${port}`);
});
