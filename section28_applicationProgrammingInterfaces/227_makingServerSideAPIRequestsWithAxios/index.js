import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
const APP = express();
const PORT = 3000;
APP.use(express.static("public"));
APP.use(bodyParser.urlencoded({ extended: true }));

APP.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://bored-api.appbrewery.com/random");
        const result = response.data;
        console.log(result);
        res.render("index.ejs", { data: result });
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", { error: error.message });
    }
});

APP.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const type = req.body.type;
        const participants = req.body.participants;
        const response = await axios.get (
            `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
        );
        const result = response.data;
        console.log(result);
        res.render("index.ejs", {
            data: result[Math.floor(Math.random() * result.length)]
        });
    } catch (error) {
        console.error("Failed to make request:", error.message);
        res.render("index.ejs", {
            error: "No activities that match your criteria.",
        });
    }
});

APP.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});