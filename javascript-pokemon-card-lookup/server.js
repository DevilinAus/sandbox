require('dotenv').config();

const express = require('express');
const app = express();

const apiKey = process.env.API_KEY;

// let searchTerm = "venusaur" // temp hardcoded

app.get('/search', async (req, res) => {
    
    let searchTerm = req.query.q;
    console.log("NEW SEARCH STARTED!")

    fetch(`https://api.pokemontcg.io/v2/cards?q=name:${searchTerm}`, {
        headers: {
            'X-Api-Key': apiKey
        }
    })
        // .then(response => console.log(response))
        .then(response => response.json())
        .then(data => {
            console.log(JSON.stringify(data, null, 2));
        })

})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});