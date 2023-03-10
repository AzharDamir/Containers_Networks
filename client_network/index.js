const express = require('express') // Include ExpressJS
const bodyParser = require('body-parser'); 
const app = express()
const request = require('request');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/formulaire.html');
});

app.post('/index', (req, res) => {
 
  let formData=req.body;
  console.log()
  console.log(formData);
  request.post('http://servercontainer:3001/index', { form: formData }, (err, response, body) => {
    if (err) {
      console.error(err);
      res.send('Error submitting form');
    } else {
      console.log("ok")
      console.log(body)
      res.send('data inserted');
    }
});
});

const port = 3000 
app.listen(port, () => console.log(`This app is listening on port ${port}`));