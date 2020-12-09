const mongoose = require('mongoose');


const feedbackSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  subject:{
    type:String,
    required:true,
  },
  teacher : {
    type:String,
    required:true,
  },
  grade:{
    type:String,
    required:true,
  },
  message:String,
});

module.exports = mongoose.model('Feedback',feedbackSchema);
