const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// require('dotenv').config();

// import postRoutes from '../routes/posts.js'

const app = express();
const port = 5000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api', cors({
  origin: 'http://localhost:3000/'
}))

const CONNECTION_URL = 'mongodb+srv://faithuser:0xTeMsACndrA8ki3@cluster0.24h80u0.mongodb.net/test'

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDb database connection establised successfully')
})


const dogBreedRoutes = require('./routes/dogs')
app.use('/dogsBreed', dogBreedRoutes)

app.listen(port, () => {
  console.log(`Server started....${port}`)
})