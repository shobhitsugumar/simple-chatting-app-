const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);
const port = 3000;

//socket.io
io.on("connection", (socket) => {
  socket.on("user-message", (msg) => {
    io.emit("usermessage", msg);
  });
});

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});
server.listen(port, () => {
  console.log("app running on port 3000");
});
