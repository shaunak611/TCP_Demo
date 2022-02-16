import WebSocket from 'ws';

const ws = new WebSocket('ws://127.0.0.2:8080/1');

ws.on('open', function open() {

  var msg = {
    type: "message",
    text: 'client_1',
    id:   '1'
  };
    //ws.send(JSON.stringify(msg));
    ws.send('client_1')
    //ws.close()
  });
  
  ws.on('message', function message(data) {
    console.log('received from server: %s', data);
  });


