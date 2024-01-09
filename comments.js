// Create web server with express
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Set up the server
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

// Get all comments
app.get("/comments", db.getComments);

// Get a specific comment
app.get("/comments/:id", db.getCommentById);

// Create a comment
app.post("/comments", db.createComment);

// Update a comment
app.put("/comments/:id", db.updateComment);

// Delete a comment
app.delete("/comments/:id", db.deleteComment);

// Start the server
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});