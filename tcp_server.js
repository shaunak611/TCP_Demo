const net = require('net')

const server = net.createServer((c) => {
  // 'connection' listener.
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });
  c.write('hello\r\n');
  c.pipe(c);
});
server.on('error', (err) => {
  throw err;
});
server.listen(8080, () => {
  console.log('server bound');
});




// server.on('connection', socket => {
//     console.log('Client Connected');

//     socket.write('Welcome')

//     socket.on('data', data => {
//         console.log('data is :-- ',data);
//         socket.write('data is ')
//         socket.write(data)
//     })

//     socket.on('end', () => {
//         console.log('Client Disconnected..');      
//     })
// })

// server.listen({
//     host:'103.250.137.97',
//     port: 9090,
//     exclusive: true
// })