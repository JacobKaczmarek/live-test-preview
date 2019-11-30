const express = require('express');
const SerialPort = require('serialport');

const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server);

const PORT = 3000;

app.use(express.static('public'));

server.listen(PORT, () => console.log('Listening...'))

io.on('connection', (socket) => {
    setInterval(() => {
        socket.emit('data', Math.floor(Math.random() * 10));
    }, 100);

})

// const port = new SerialPort('', { baudRate: 9600 }, (err) => console.error(err) );

// port.on('data', (data) => console.log(data));

// port.write('420')