import express from "express";
import bodyParser from "body-parser";
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
    DB.end();
});

APP.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});