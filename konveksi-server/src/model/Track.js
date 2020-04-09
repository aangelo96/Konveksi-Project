const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  userId : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  trackNum : {
    type : Number
  },
  status : {
    type : String
  },
  lastUpdate : {
    type : String
  },
  nextDeadline : {
    type : String
  },
  img : {
    type : String
  }
});

mongoose.model('Track', trackSchema);
