const express = require("express");
const app = express();
const path = require("node:path");

const pool = require("./db/db");

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
    user_name: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user_name: "Charles",
    added: new Date(),
  },
];

// Route to render the index page
app.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM messages ORDER BY added DESC"
    );
    res.render("index", {
      title: "Mini Messageboard",
      messages: result.rows,
      links: links,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/new", (req, res) => {
  res.render("form", { title: "Add a New Message", links: links });
});

// Route to handle form submissions
app.post("/new", async (req, res) => {
  const { user_name, text } = req.body;
  try {
    await pool.query("INSERT INTO messages (user_name, text) VALUES ($1, $2)", [
      user_name,
      text,
    ]);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.get("/message/:id", async (req, res) => {
  const messageId = req.params.id;
  console.log("Message ID:", messageId);
  try {
    const result = await pool.query("SELECT * FROM messages WHERE id = $1", [
      messageId,
    ]);
    console.log(result.rows); // Check what is returned
    if (result.rows.length > 0) {
      res.render("message", { message: result.rows[0] });
    } else {
      res.status(404).send("Message not found");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

const PORT = 3000;

pool.on("connect", () => {
  console.log("Connected to the database");
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
