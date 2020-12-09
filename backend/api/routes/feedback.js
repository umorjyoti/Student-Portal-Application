const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');
const mongoose = require('mongoose');
//Routes
router.get('/',(req,res,next)=>{
  Feedback.find()
    .select('_id subject teacher grade message')
    .exec()
    .then(docs=>{
      res.status(200).json({
        count:docs.length,
        feedbacks:docs.map(doc=>{
          return {
            _id:doc._id,
            subject:doc.subject,
            teacher:doc.teacher,
            grade:doc.grade,
            message:doc.message,
          };
        })
      });
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({
        error:err
      });
    });
});



router.post('/',(req,res,next)=>{
  const feedback = new Feedback({
    _id:new mongoose.Types.ObjectId(),
    subject:req.body.subject,
    teacher:req.body.teacher,
    grade:req.body.grade,
    message:req.body.message,
  });
  feedback.save().then(result =>{
    console.log(result);
    res.status(201).json({
      message:"Posted Successfully",
      feedback:{
        _id:result._id,
        subject:result.subject,
        teacher:result.teacher,
        grade:result.grade,
        message:result.message,
        request:{
          type:"GET",
          url:'http://127.0.0.1:3000/api/feedback/'+result._id
        }
      },
    });
  }).catch(err=>{
    console.log(err);
    res.status(500).json({
      error:err
    });
  });
});

//Exporting
module.exports = router;
