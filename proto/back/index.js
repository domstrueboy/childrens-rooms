const WebSocket = require('ws');
const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
 
mongoClient.connect(function(err, client){
  const db = client.db("sked-db");
  const collection = db.collection("users");
  let user = {name: "Tom", age: 23};
  collection.insertOne(user, function(err, result){
    if (err){ 
      return console.log(err);
    }
    console.log(result.ops);
    client.close();
  });
});
 
const wss = new WebSocket.Server({ port: 8081 });
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
 
  ws.send('something');
});