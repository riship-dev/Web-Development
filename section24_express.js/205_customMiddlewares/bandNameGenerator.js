import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath, pathToFileURL } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)); 
const APP = express();
const PORT = 3000;
APP.use(bodyParser.urlencoded({extended: true}));

APP.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

APP.post("/submit", bandNameGenerator);

APP.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

function bandNameGenerator(req, res) {
    res.send(`<h1>${req.body.street + req.body.pet}<h1>`);
}