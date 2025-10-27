

/**
 Steps:
 install express, module

 routes follow url ur going to like api\/randpmNumber
 */

import express from "express";
//instance of the express server
const app = express();

app.use(express.static("./public"));

app.get("/api/randomNumber", (req, res) => {
    res.send(Math.random());

})//string the route ur responding to and so everythime the api runs requestes it will run this fucntion requesnt(having header and body) and 
//response(also having header and body)
app.listen(3000);

