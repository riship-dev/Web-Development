import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
const APP = express();
const PORT = 3000;
APP.use(bodyParser.urlencoded({ extended: true }));

// HINTs: Use the axios documentation as well as the video lesson to help you.
// https://axios-http.com/docs/post_example
// Use the Secrets API documentation to figure out what each route expects and how to work with it.
// https://secrets-api.appbrewery.com/

//TODO 1: Add your own bearer token from the previous lesson.
const API_URL = "https://secrets-api.appbrewery.com";
const yourBearerToken = "155f626b-9163-4038-b642-b2e95811e915";
const config = {
    headers: { Authorization: `Bearer ${yourBearerToken}` }
};

APP.get("/", (req, res) => {
    res.render("index.ejs", { content: "Waiting for data..." });
});

APP.post("/get-secret", async (req, res) => {
    const searchId = req.body.id;
    try {
        const result = await axios.get(`${API_URL}/secrets/${searchId}`, config);
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        res.render("index.ejs", { content: error.message });
    }
});
APP.post("/post-secret", async (req, res) => {
    try {
        const result = await axios.post(`${API_URL}/secrets`, req.body, config)
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        res.render("index.ejs", { content: error.message });
    }
});
APP.post("/put-secret", async (req, res) => {
    const searchId = req.body.id;
    try {
        const result = await axios.put(`${API_URL}/secrets/${searchId}`, req.body, config)
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        res.render("index.ejs", { content: error.message });
    }
});
APP.post("/patch-secret", async (req, res) => {
    const searchId = req.body.id;
    try {
        const result = await axios.patch(`${API_URL}/secrets/${searchId}`, req.body, config)
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        res.render("index.ejs", { content: error.message });
    }
});
APP.post("/delete-secret", async (req, res) => {
    const searchId = req.body.id;
    try {
        const result = await axios.delete(`${API_URL}/secrets/${searchId}`, config)
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        res.render("index.ejs", { content: error.message })
    }
});

APP.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});