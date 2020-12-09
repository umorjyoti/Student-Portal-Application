const mongoose = require('mongoose');


const achievementSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  studentid:{
    type: String,
    require: true
  },
  achievementType:{
    type: String,
    require: true
  },
  achievementName:{
    type: String,
    require: true
  },
  achievementDate:{
    type: String,
    require: true
  },
});

module.exports = mongoose.model('Achievement',achievementSchema);
