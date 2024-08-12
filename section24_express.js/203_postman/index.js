import express from "express";
const APP = express();
const PORT = 3000;

APP.get("/", (req, res) => {
    res.send("<h1>Homepage</h1>");
});

APP.post("/register", (req, res) => {
    res.sendStatus(201);
});

APP.put("/user/rishi", (req, res) => {
    res.sendStatus(200);
});

APP.patch("/user/rishi", (req, res) => {
    res.sendStatus(200);
});

APP.delete("/user/rishi", (req, res) => {
    res.sendStatus(200);
});

APP.listen(PORT, () => {
    console.log(`Application live on port ${PORT}`);
});