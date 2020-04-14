const jwt = require('jsonwebtoken');
const express = require('express');
const mongoose = require('mongoose');

const requireAuth = require('../middlewares/requireAuth');

const User = mongoose.model('User');
const OrderParam = mongoose.model('OrderParam');
const Track = mongoose.model('Track');
const Bid = mongoose.model('Bid');


const router = express.Router();

router.use(requireAuth);

/*SUBMITTING NEW ORDER REQUEST*/
router.post('/order', async (req,res) => {
  const { color , secColor, option, amount, budget, imgs } = req.body;

  try {
    const lastUpdate = Date(Date.now());

    const track = new Track({ userId:req.user._id, status:'On Bidding', lastUpdate:lastUpdate, nextDeadline:'-', img:imgs[0] });
    await track.save();

    try {

      const orderParam = new OrderParam({ trackId:track._id, color:color, secColor:secColor, option:option, amount:amount, budget:budget, imgs:imgs});
      await orderParam.save();

      res.send(track);

    } catch (err) {

      res.status(422).send(err.message);

    }

  } catch (err) {

    res.status(422).send(err.message);

  }


});

/*FETCHING A LIST OF ORDERS*/
router.post('/fetchlist', async (req,res) => {

  const {token} = req.body;

  jwt.verify(token, 'my_secret_key', async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: 'You must be logged in.' })
    }

    const { userId } = payload;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(422).send({ error: 'Must be logged in'});
    }

    try {

      const orders = await Track.find({userId:user._id, status:{$ne:"Finished"}});
      res.send(orders);

    } catch (err) {

      console.log(err);

    }

  });


});

router.post('/fetchdetail', async (req,res) => {

  if (!req.user) {
    return res.status(422).send({ error: 'Must be logged in'});
  }

  try {

    const detail = await OrderParam.findOne({trackId:req.order._id});
    res.send(detail);

  } catch (err) {

    console.log(err);

  }

});

/*FETCHING A LIST OF ORDERS*/
router.post('/history', async (req,res) => {

  const {token} = req.body;

  jwt.verify(token, 'my_secret_key', async (err, payload) => {
    if (err) {
      return res.status(401).send({ error: 'You must be logged in.' })
    }

    const { userId } = payload;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(422).send({ error: 'Must be logged in'});
    }

    try {

      const orders = await Track.find({userId:user._id, status:"Finished"});
      res.send(orders);

    } catch (err) {

      console.log(err);

    }

  });


});

module.exports = router;
