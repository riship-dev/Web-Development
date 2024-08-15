import express from "express";
//import morgan from "morgan";
const APP = express();
const PORT = 3000;

//APP.use(morgan("tiny"));
APP.use(logger);

APP.get("/", (req, res) => {
    res.send("Hello");
});
APP.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

function logger(req, res, next) {
    console.log(req.method);
    console.log(req.url);
    next();
}