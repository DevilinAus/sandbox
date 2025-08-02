require('dotenv').config();
const fs = require('fs');

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());


const apiKey = process.env.API_KEY;

// let searchTerm = "venusaur" // temp hardcoded

app.get('/search', async (req, res) => {
    
    let searchTerm = req.query.q;
    console.log(`NEW SEARCH STARTED! Search term is ${searchTerm}`);
    // TODO: API returns an error when searching for something with a space in the name. "Venusaur EX returns error 304 needs investigation."

    try {
        const response = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${searchTerm}`, {
            headers: {
                'X-Api-Key': apiKey
            }
        });

        // .then(response => console.log(response))
        const data = await response.json();
        const formattedData = JSON.stringify(data, null, 2);
        console.log("Returning Data...")
        fs.writeFileSync('pokemon_response.json', formattedData) // saving the response to file so I can look through it to work with the format.
        res.send(formattedData);  

    } catch(error) {
        console.log("error")
    }
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});