import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const APP = express();
const PORT = 3000;
APP.use(bodyParser.urlencoded({ extended: true }));
APP.use(express.static("public"));

let quiz = [];
const DB = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "webDevelopmentCourse",
    password: "postgres",
    port: 5432
});
DB.connect();
DB.query("SELECT * FROM flags", (err, res) => {
    if (err) {
        console.error("Error executing query", err.stack);
    } else {
        quiz = res.rows;
    }
    DB.end();
});
let totalCorrect = 0;
let currentQuestion = {};

APP.get("/", async (req, res) => {
    totalCorrect = 0;
    await nextQuestion();
    console.log(currentQuestion);
    res.render("index.ejs", { question: currentQuestion });
});

APP.post("/submit", (req, res) => {
    let answer = req.body.answer.trim();
    let isCorrect = false;
    if (currentQuestion.name.toLowerCase() === answer.toLowerCase()) {
        totalCorrect++;
        console.log(totalCorrect);
        isCorrect = true;
    }
    nextQuestion();
    res.render("index.ejs", {
        question: currentQuestion,
        wasCorrect: isCorrect,
        totalScore: totalCorrect,
    });
});

async function nextQuestion() {
    const RANDOM_COUNTRY = quiz[Math.floor(Math.random() * quiz.length)];
    currentQuestion = RANDOM_COUNTRY;
}

APP.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});