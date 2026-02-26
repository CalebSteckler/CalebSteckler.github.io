const express = require('express');
const app = express();

const apiKey = '57ef605cd706e56a6c00b2cffc8e549c';

// Serve static files
app.use(express.static(__dirname));

// FRED proxy endpoint
app.get('/api/series/:id', async (req, res) => {
  try {
    const url = `https://api.stlouisfed.org/fred/series/observations?series_id=${req.params.id}&api_key=${apiKey}&file_type=json`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Server on http://localhost:3000'));