const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

const PORT = process.env.PORT || 3000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("<h1>HELLO WORLD <samll>A small text</small?</h1>");
});

app.get("/api/v1/:id/:value", (req, res) => {
  res.send(`Inisde a path ${req.params.id} ${req.params.value}`);
});

app.get("/api/v1/:id", (req, res) => {
  const path = req.params.id;
  res.send(`Inisde a path ${path}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
