const mongoose = require('mongoose');

const OrderParamSchema = new mongoose.Schema({
  trackId : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Track'
  },
  color : {
    type : String
  },
  secColor : {
    type : String
  },
  option : {
    type : String
  },
  amount : {
    type : Number
  },
  budget : {
    type : Number
  },
  imgs : {
    type : [String]
  }
});

mongoose.model('OrderParam', OrderParamSchema);
