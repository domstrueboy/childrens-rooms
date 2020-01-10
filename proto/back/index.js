const WebSocket = require('ws');
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/';
const mongoClient = new MongoClient(url, { useNewUrlParser: true });

mongoClient.connect((err, client) => {
  const db = client.db('sked-db');
  const collection = db.collection('users');
  const user = { name: 'Tom', age: 23 };
  collection.insertOne(user, (error, result) => {
    if (error) {
      return console.log(error);
    }
    console.log(result.ops);
    client.close();
    return 0;
  });
});

const wss = new WebSocket.Server({ port: 8081 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received: %s', message);
  });

  ws.send('something');
});
