//import
const express = require('express');

//Cors is a package that allows the client and server to communicate with each other without the need for advanced configuration.
const cors = require("cors");


//void repeating lengthy code, we will create a variable called app that we will reuse to initialize express commands
//Create a variable called app and set its value equal to express invoked
const app = express()


//middleware
//Our client and server will be communicating by sending and receiving JSON objects to each other. In this step, we will configure our express server to use JSON objects correctly.
//Set your server up to accept JSON object responses
app.use(express.json())

//need to allow our express server to use the cors package we required
app.use(cors());


//endpoint
//create first endpoint and method to handle sending a friends array back to the client (front end)

app.get('/api/users',(req,res) => {
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
})

//take parameter :temperature
// app.get('/weather/:temperature',(req,res) => {
//     const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
//     res.status(200).send(phrase);
// })
//easeier to read code:
app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
  });

  //http://localhost:4000/weather/hot 
  //http://localhost:4000/weather/cold

// tell express to set our server up to run (or “listen”) on port 4000
//Set your express server to listen to requests on port 4000
app.listen(4000, () => console.log('Server running on 4000'))