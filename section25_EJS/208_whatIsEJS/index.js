import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const todayDate = new Date();
    const day = todayDate.getDay();
    let type = "weekday";
    let adv = "work hard";
    if (day === 0 || day === 6) {
        type = "weekend";
        adv = "have fun";
    }
    res.render("index.ejs", {
        dayType: type,
        advice: adv
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});