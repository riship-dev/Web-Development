import express from "express";
const APP = express();
const PORT = 3000;

APP.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});
APP.get("/about", (req, res) => {
    res.send("<h1>About Me</h1>");
});

APP.listen(PORT, () => {
    console.log(`Live on port ${PORT}`);
});