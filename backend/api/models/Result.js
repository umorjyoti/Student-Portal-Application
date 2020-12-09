const mongoose = require('mongoose');


const resultSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  studentid:String,
  cgpa:{
    type:String,
    required:true,
  },
  sgpa : {
    type:String,
    required:true,
  },
  semester:String,
  backlogs:String,
});

module.exports = mongoose.model('Result',resultSchema);
