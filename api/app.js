const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
require('dotenv').config();
const dataJson = require("./data");



app.use(express.json());
app.use(cors());

app.get('/', function(req, res) {
    
    res.send(dataJson);
    console.log(dataJson[0])

  });


if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`port is running on ${PORT}`);
})