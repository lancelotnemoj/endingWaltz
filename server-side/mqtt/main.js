var mosca = require("mosca");

// var mosca = require("mosca");
var server = new mosca.Server({
  http: {
    port: 1884,
    bundle: true,
    static: './'
  }
});

// var server = new mosca.Server(settings);

server.on("clientConnected", function(client) {
  console.log("client connected", client.id);
});

// fired when a message is received
server.on("published", function(packet, client) {
  console.log("Published", packet.payload.toString(), packet.topic.toString());
});

server.on("ready", setup);

// fired when the mqtt server is ready
function setup() {
  console.log("Mosca server is up and running");
}
