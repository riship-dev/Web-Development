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
    port: 5432,
});
DB.connect();

async function checkVisited() {
    const result = await DB.query("SELECT country_code FROM visited_countries");
    let countries = [];
    result.rows.forEach((country) => {
        countries.push(country.country_code);
    });
    return countries;
}

APP.get("/", async (req, res) => {
    const countries = await checkVisited();
    res.render("index.ejs", { countries: countries, total: countries.length });
});

APP.post("/add", async (req, res) => {
    const input = req.body["country"];
    try {
        const result = await DB.query(
            "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
            [input.toLowerCase()]
        );
        const data = result.rows[0];
        const countryCode = data.country_code;
        try {
            await DB.query(
                "INSERT INTO visited_countries (country_code) VALUES ($1)",
                [countryCode]
            );
            res.redirect("/");
        } catch (err) {
            console.log(err);
            const countries = await checkVisited();
            res.render("index.ejs", {
                countries: countries,
                total: countries.length,
                error: "Country has already been added, try again.",
            });
        }
    } catch (err) {
        console.log(err);
        const countries = await checkVisited();
        res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country name does not exist, try again.",
        });
    }
});

APP.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});