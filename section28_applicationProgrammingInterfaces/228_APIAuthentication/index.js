import express, { response } from "express";
import axios from "axios";
const APP = express();
const PORT = 3000;

const API_URL = "https://secrets-api.appbrewery.com";
const yourUsername = "rishipdev";
const yourPassword = "password";
const yourAPIKey = "bbc79e9e-7fdc-4b39-80aa-577f9624356f";
const yourBearerToken = "155f626b-9163-4038-b642-b2e95811e915";

APP.get("/", (req, res) => {
    res.render("index.ejs", { content: "API Response." });
});
APP.get("/noAuth", async (req, res) => {
    try {
        const result = await axios.get(`${API_URL}/random`);
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        console.error("Failed to make request: ", error.message);
        res.render("index.ejs", { content: error.message });
    }
});
APP.get("/basicAuth", async (req, res) => {
    try {
        const result = await axios.get(`${API_URL}/all?page=2`, { 
            auth: {
                username: yourUsername,
                password: yourPassword
            }
        });
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        console.error("Failed to make request: ", error.message);
        res.render("index.ejs", { content: error.message });
    }   
});
APP.get("/apiKey", async (req, res) => {
    try {
        const result = await axios.get(`${API_URL}/filter`, {
            params: {
                score: 5,
                apiKey: yourAPIKey
            }
        });
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        console.error("Failed to make request: ", error.message);
        res.render("index.ejs", { content: error.message });
    }   
});
APP.get("/bearerToken", async (req, res) => {
    try {
        const result = await axios.get(`${API_URL}/secrets/42`, {
            headers: { 
                Authorization: `Bearer ${yourBearerToken}` 
            }
        });
        res.render("index.ejs", { content: JSON.stringify(result.data) });
    } catch (error) {
        console.error("Failed to make request: ", error.message);
        res.render("index.ejs", { content: error.message });
    }   
});

APP.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
