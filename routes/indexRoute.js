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
  },
  {
    text: "He He",
    user: "sanatan",
    added: new Date()
  },
  {
    text: "Hii, this is a very very long text because i just love to write and i have a preaty much waste time to spend on.",
    user: "fool",
    added: new Date()
  }
];


indexRouter.get("/", (req, res) => {
  console.log("router works");
  res.render("index", { messages: messages });
})

module.exports = indexRouter;