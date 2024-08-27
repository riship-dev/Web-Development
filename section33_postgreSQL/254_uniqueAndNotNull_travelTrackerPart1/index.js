import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const APP = express();
const PORT = 3000;
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(express.static("public"));

const DB = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "webDevelopmentCourse",
    password: "postgres",
    port: 5432
});
DB.connect();

APP.get("/", async (req, res) => {
    const RESULT = await DB.query("SELECT country_code FROM visited_countries");
    let countries = [];
    RESULT.rows.forEach((country) => {
        countries.push(country.country_code);
    });
    console.log(RESULT.rows);
    res.render("index.ejs", { countries: countries, total: countries.length });
});

APP.post("/add", async (req, res) => {
    const INPUT = req.body["country"];
    const RESULT = await DB.query(
        "SELECT country_code FROM countries WHERE country_name = $1",
        [INPUT]
    ); 
    if (RESULT.rows.length !== 0) {
        const DATA = RESULT.rows[0];
        const COUNTRY_CODE = DATA.country_code;
        await DB.query(
            "INSERT INTO visited_countries (country_code) VALUES ($1)",
            [COUNTRY_CODE]
        );
        res.redirect("/");
    }
});

APP.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});