const express = require("express");
const app = express();
const http = require("http");

const server = http.createServer(app);
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});
server.listen(port, () => {
  console.log("app running on port 3000");
});
