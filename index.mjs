// Add Express
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

// Initialize Express
const app = express(cors());

const getQuotes = async() => {
    const response = await fetch("https://raw.githubusercontent.com/ParthivMangukiya/learning/main/other/quotes.md"); // get quotes
    let quotes = await response.text()
    quotes = quotes.split("\n")
    let rndind = Math.floor(Math.random() * quotes.length);
    return quotes[rndind].slice(2)
};


// Create GET request
app.get("/", (req, res) => {
    res.send("Hello Parthiv!");
});

app.get("/quote", async(_, res) => {
    const quotes = await getQuotes()
    res.send(quotes);
});

// Initialize server
app.listen(9009, () => {
    console.log("Running on port 9009.");
});