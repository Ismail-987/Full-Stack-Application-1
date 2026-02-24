// const express = require('express'); // Tradtional CommonJS import
import express from 'express'; // ES6 module import 
// I can name the imported function anything I want because it's the default export from the express module. In this case, I'm naming it 'express' for clarity and convention.
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Ismail Mti');
});
app.get('/api/data', (req, res) => {
  const data = {
    message: 'This is some sample data from the server.',
    timestamp: new Date(),
  };
  res.json(data);
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});