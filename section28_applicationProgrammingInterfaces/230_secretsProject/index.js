import express from "express";
import axios from "axios";
const APP = express();
const PORT = 3000;
APP.use(express.static("public"));

APP.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs", {
            secret: result.data.secret,
            user: result.data.username
        });
    } catch(error) {
        res.send(`${error.message}`);
    }
});

APP.listen(PORT, () => {
    console.log(`Application live on port: ${PORT}`);
});