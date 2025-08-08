const express = require("express");
const app = express();
const indexRouter = express.Router();


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


indexRouter.get("/", (req, res) => {
  console.log("router works");
  res.render("index", { messages: messages });
})

module.exports = indexRouter;