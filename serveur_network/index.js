const MongoClient = require('mongodb').MongoClient;

const bodyParser = require('body-parser'); 
const express = require('express') // Include ExpressJS

const uri = "mongodb://mongodb-container:27017/mydb";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/index', async (req, res) => {
  const data = req.body;
  console.log(data)
  try {
    await client.connect();
    console.log('Connected to MongoDB server');
    
    const collection = client.db("mydb").collection("mycollection");
    collection.insertOne(data, (err, result) => {
      if (err) throw err;
      console.log("Data inserted!");
      
      client.close();
    });
    res.send('Data inserted!');
    // Your MongoDB operations go here
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});
const port = 3001
app.listen(port, () => console.log(`This app is listening on port ${port}`));