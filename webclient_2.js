import WebSocket from 'ws';

const ws = new WebSocket('ws://127.0.0.3:8080/2');

ws.on('open', function open() {
    var msg = {
        type: "message",
        text: 'client_2',
        id:   '2'
      };
        //ws.send(JSON.stringify(msg));
        ws.send('client_2')
  });
  
  ws.on('message', function message(data) {
    console.log('received from server: %s', data);
  });
