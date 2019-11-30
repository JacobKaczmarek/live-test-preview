const express = require('express');

const app = express();
const server = require('http').createServer(app)

const PORT = 3000;

app.use(express.static('public'));

app.get('/start', () => port.write('420'));

server.listen(PORT, () => console.log('Listening...'))

// Serial port setup
const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline;
const port = new SerialPort('', { baudRate: 9600 }, (err) => console.error(err) );
const parser = new Readline();

port.pipe(parser);

port.on('data', (data) => console.log(data));


// Socket.io setup
const io = require('socket.io')(server);

io.on('connection', (socket) => {
    
});