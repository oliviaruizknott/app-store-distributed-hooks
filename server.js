import WebSocket, { WebSocketServer } from 'ws';

const GREEN = "42m";
const RED = "41m";

const eventLog = (msg, color=GREEN) => {
  console.log("===================================");
  console.log(`\x1b[${color}%s\x1b[0m`, ` ${msg} `);
  console.log("===================================");
}

const wssPort = 8082;
const wss = new WebSocketServer({ port: wssPort });
eventLog(`WebSocket server is listening on port ${wssPort}`);

const clients = {};

const sendToAll = (data, isBinary=false) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data, { binary: isBinary });
    }
  });
}

wss.on("connection", (ws, req) => {
  const clientIp = req.connection.remoteAddress;
  const id = Math.random().toString(36).substr(2, 7);
  clients[clientIp] = id;

  eventLog(`👋 New client connected! ${clientIp}`);
  console.log("Number of clients: ", wss.clients.size);
  console.log(clients);

  ws.send(JSON.stringify(`👋 Welcome to the server!`));

  ws.on("message", (data, isBinary) => {
    // log the message to the server console
    console.log(`[JSON IN]: ${data}`);

    // relay message to all clients
    sendToAll(data, isBinary);
  });

  ws.on("close", () => {
    eventLog(" 💔 Client has disconnected.", RED);

    delete clients[clientIp];
    console.log("Number of clients: ", wss.clients.size);

    sendToAll(JSON.stringify(`💔 Someone left.`))
  });
});