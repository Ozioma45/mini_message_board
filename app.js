const express = require("express");
const app = express();
const path = require("node:path");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//setup ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));

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
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
    links: links,
  });
});

app.get("/new", (req, res) => {
  res.render("form", { title: "Add a New Message", links: links });
});

// Route to handle form submissions
app.post("/new", (req, res) => {
  const { user, text } = req.body; // Get the form data

  // Add the new message to the messages array
  messages.push({
    text,
    user,
    added: new Date(),
  });

  // Redirect back to the homepage to see the updated messages
  res.redirect("/");
});

app.get("/message/:id", (req, res) => {
  const messageId = parseInt(req.params.id, 10);

  // Check if the message exists
  if (messageId >= 0 && messageId < messages.length) {
    const message = messages[messageId];
    res.render("message", { message });
  } else {
    res.status(404).send("Message not found");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
