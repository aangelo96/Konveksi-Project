require('./model/User');
require('./model/Track');
require('./model/OrderParam');
require('./model/Bid');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackingRoutes');
const orderRoutes = require('./routes/orderRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);
app.use(orderRoutes);

const mongoUri = 'mongodb+srv://admin:adminpassword@cluster0-gfyz0.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
  console.error('Érror connection to mongoo', err);
})

app.get('/', requireAuth, (req, res) => {
  res.send(`Your email : ${req.user.email}`);
})

app.listen(3000, () => {
  console.log('Listening on port 3000');
})
