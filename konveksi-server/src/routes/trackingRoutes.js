const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Track = mongoose.model('Track');

const router = express.Router();

router.use(requireAuth);

router.get('/tracks', async (req, res) => {
  const tracks = await Track.find({ userId: req.user._id });

  res.send(tracks);
});

router.post('/tracks', async (req,res) => {

  const { trackId, status, nextDeadline, img } = req.body;

  var lastUpdate = Date.now();

  if (!trackId || !status || !img) {
      return res.status(422).send({ error: 'You must provide enough information' });
  };

  try {
    const track = new Track({ userId:req.user._id, trackId:trackId, status:status , nextDeadline:nextDeadline, lastUpdate:lastUpdate, img:img });
    await track.save();
    res.send(track);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
