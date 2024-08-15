import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const APP = express();
const PORT = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
APP.use(bodyParser.urlencoded({ extended: true }));
const password = "password";

APP.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

APP.post("/check", checkPassword);

APP.listen(PORT, () => {
    console.log(`Application live on port: ${PORT}`);
});

function checkPassword(req, res) {
    if (req.body.password === password) 
        res.sendFile(__dirname + "/public/secret.html");
    else 
        res.sendFile(__dirname + "/public/index.html");
}