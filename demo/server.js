const express = require('express');

const app = express();
const PORT = process.env.PORT | 5000;

app.use(express.static('client'));

app.listen(PORT, () => {
  console.log(`Demo application is running at http://localhost:${PORT}`);
});
