const express = require("express");

const app = express();
const server = require("http").createServer(app);

const PORT = 3000;

app.use(express.static("public"));

app.get("/start", (req, res) => {
  port.write("420");
  console.log("Launched");

  res.sendStatus(200);
});

app.get("/stop", (req, res) => {
  port.write("stop");
  console.log("Stopped");

  res.sendStatus(200);
});

server.listen(PORT, () => console.log("Listening..."));

// Serial port setup
const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort("/dev/cu.wchusbserial40110", { baudRate: 9600 }, err => console.error(err));
const parser = new Readline();

port.pipe(parser);

// Socket.io setup
const io = require("socket.io")(server);

io.on("connection", socket => {
  port.on("data", data => {
    console.log(data.toString());
    socket.emit("data", data.toString());
  });
});
