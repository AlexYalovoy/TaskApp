const mongoDb = require('mongodb');
const { MongoClient, ObjectID } = mongoDb;

const connectionURL = 'mongodb://127.0.0.1:27017';
const dbName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (err, client) => {
    if (err) throw err;

    console.log('connected');

    const db = client.db(dbName);

    db.collection('tasks').updateMany({completed: false}, { $set: {
      completed: true,
    }}, (err, result) => {
      if (err) {
        return console.log('err inserting')
      };

      console.log('done');
      console.log(result)

    });
  }
);