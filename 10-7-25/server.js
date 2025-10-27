import express from "express";

//so behind scenes yiu explitelystate that its a moduce within package.json file

const app = express();

const PORT = 3000;

app.listen(PORT, (req, res) => {
    console.log("server started!");
})

you have server generat eocntent and send content to front end bc if you have api keys its not private but a server allows you for that