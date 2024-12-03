const express = require("express");
const app = express();
const path = require("node:path");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//setup ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Navigation links and user data
const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "New Messages" },
];

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// Route to render the index page
app.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
