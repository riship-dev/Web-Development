import express from "express"; //a web application framework for Node.js
import bodyParser from "body-parser"; //used to parse incoming request bodies.
import {dirname} from "path"; //used to get the directory name of a path.
import {fileURLToPath} from "url"; //used to convert a file URL to a path.

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
var bandName = "";
function bandNameGenerator(req, res, next) {
    bandName = req.body["street"] + req.body["pet"];
    next();
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bandNameGenerator);
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});
app.post("/submit", (req, res) => {
    res.send(`<h1>Your band name is: ${bandName}</h1>`);
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});