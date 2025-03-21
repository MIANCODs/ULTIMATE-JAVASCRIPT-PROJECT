const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors()); // Enable CORS for React frontend
app.use(express.json());

// Replace with your API key and endpoint
const API_KEY = '66f40d80-31c4-48df-af48-e1318b5be052'; // Add your key here
const API_ENDPOINT = 'https://api.xai.com/v1/chat'; // Replace with actual endpoint

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(API_ENDPOINT, {
      prompt: message,
      max_tokens: 150
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    res.json({ reply: response.data.response }); // Adjust based on API response structure
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get response from AI' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));

