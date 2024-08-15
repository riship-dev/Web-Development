import express from"express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const APP = express();
const PORT = 3000;

APP.use(bodyParser.urlencoded({extended: true}));

APP.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

APP.post("/submit", (req, res) => {
    console.log(req.body);
});

APP.listen(PORT, () => {
    console.log(`App live on port: ${PORT}`);
});