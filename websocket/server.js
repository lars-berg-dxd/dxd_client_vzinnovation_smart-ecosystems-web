const WebSocket = require("ws");
var config = require("../config.json");

// const config = {
//   port: 8080,
// };

const wss = new WebSocket.Server({
  port: config.wsport,
  perMessageDeflate: false,
});

// Called when success building connection
wss.on("connection", function(ws, req) {
  console.log("Client connected");
  console.log("Number of clients connected : " + wss.clients.size);

  // Callback from client message
  ws.on("message", function(message) {
    console.log("received: %s", message);
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
        console.log(`Sending message ${message} to client`);
      }
    });
  });

  ws.on("close", function() {
    console.log("Client disconnected");
    console.log("Number of clients connected : " + wss.clients.size);
  });

  ws.on("error", function(err) {
    console.log("client error");
    console.log(err);
  });
});

wss.on("error", function(err) {
  console.log("connection error");
  console.log(err);
});
