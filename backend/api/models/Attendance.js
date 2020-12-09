const mongoose = require('mongoose');

const attendanceSchema = mongoose.Schema({
  id:mongoose.Schema.Types.ObjectId,
  studentid:{
    type: String,
    require: true
  },
  subname:{
    type: String,
    require: true
  },
  attendance:{
    type: Number,
    require: true
  }
});


module.exports = mongoose.model('Attendance', attendanceSchema);
