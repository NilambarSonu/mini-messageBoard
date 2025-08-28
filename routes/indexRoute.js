const express = require("express");
const indexRouter = express.Router();
const messages = [
  {
    text: "This is My first Backend Project",
    user: "Sanatan :",
    added: new Date()
  },
  {
    text: "I have contributed to UI/UX part of this project.",
    user: "Nilambar :",
    added: new Date()
  },
  {
    text: "Hii, this is a very very long text because i just love to write and i have a preaty much waste time to spend on.",
    user: "Fool",
    added: new Date()
  }
];
indexRouter.get("/new", (req, res) => {
  res.render('form');
})
indexRouter.post("/new", (req, res) => {
    const name = req.body.user_name;
    const message = req.body.message;
    messages.push({
      text: message,
      user: name,
      added: new Date()
  })
  res.redirect('/');
})
indexRouter.get("/", (req, res) => { 
  res.render("index", { messages: messages });
})

module.exports = indexRouter;