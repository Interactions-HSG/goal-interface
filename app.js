const http = require('http');
const path = require('path');
const express = require("express");
const cors = require('cors'); 
const app = express();
const httpServer = http.Server(app);
const { Server } = require("socket.io");
const io = new Server(httpServer);

const hostname = '127.0.0.1';
const port = 5000;

app.use(cors())

app.use(express.json())

app.use(express.static('public'))
//app.use('/static', express.static(__dirname + '/public'));
//app.use("/fonts", express.static(__dirname + '/public/fonts'));

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.sendFile(path.join(__dirname, 'index.html'));
});

function displayNotification(notification){
    state = notification["status"] //Possible states: busy/agent is still busy and not ready to accept another goal; please try later, accepted, completed.
    message = ""
    if (state == "busy"){
      message = "The agent is still busy and not ready to accept another goal; please try later"
    }
    else if (state == "accepted"){
      message = "The agent is working towards the goal"
    } else if (state == "completed"){
      message = "The agent has completed the goal."
    }
    io.emit('goal', {'message': message})
    console.log(message)
}

app.post('/notification', (req, res) => {
  console.log("request: "+req.body)
    notification = req.body
    displayNotification(notification)
    res.statusCode = 200;
    res.send()
});



httpServer.listen(port), 
	() => console.log("Server is running... on "+port);