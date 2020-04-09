const mongoose = require('mongoose');

const BidSchema = new mongoose.Schema({
  trackId : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Track'
  },
  bidNum : {
    type : Number
  },
  duration : {
    type : String
  },
  bidPrice : {
    type : Number
  },
  nReview : {
    type : Number
  },
  avgReview : {
    type : Number
  },
  sizeChart : {
    type : [String]
  }
});

mongoose.model('Bid', BidSchema);
