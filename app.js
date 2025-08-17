const express = require("express");
const app = express();
const port = 3000;
const indexRouter = require("./routes/indexRoute.js");
const path = require("node:path");



app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use("/", indexRouter);

app.get("/new", (req, res) => {
    res.send("This is the new message sending part.")
})



app.listen(port, console.log(`App is listening on port${port}`))