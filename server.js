const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  
  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });
  
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
});

http.listen(3001, () => {
  console.log('Listening on port 3001');
});