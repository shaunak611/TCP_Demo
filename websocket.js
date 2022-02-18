import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws,request,client) {

  ws.on('message', function message(data) {

    //const gps = JSON.parse(data);

    const ip = request.socket.remoteAddress;
    console.log('ip=' + ip);
    console.log('req ID = '+request.url);
    console.log(`received: %s `, data);

    // ws.send(data)
    const url = request.url
    const myArray = url.split("/");
    console.log("url="+myArray[2]);

    // function calc(e){
    //   if((data%2)==0){
    //     let temp = parseInt(e)-100
    //     return temp
    //   }else{
    //     let temp = parseInt(e)+100
    //     return temp
    //   }
    // }

    if(resultLength=='0'){
      gps.save().then(()=>{
        console.log('GPS data stored...');
      }).catch(err=>console.log(err))
    }
    else if(!resultLength=='0'){
      ws.send('Send data for client '+myArray[2]+' from '+myArray[1]+' is '+ 'Location..!!')
    }
    else{
        ws.send('Send data for another client is '+calc(data))
    }
  });
});

