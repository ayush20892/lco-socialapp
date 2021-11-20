const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>HELLO WORLD <samll>A small text</small?</h1>");
});

app.get("/api/v1/:id", (req, res) => {
  const path = req.params.id;
  res.send(`Inisde a path ${path}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
