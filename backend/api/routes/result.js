const express = require('express');
const router = express.Router();
const Result = require('../models/Result');
const mongoose = require('mongoose');

//Routes
router.get('/',(req,res,next)=>{
  Result.find()
    .select('_id cpga sgpa semester backlogs')
    .exec()
    .then(docs=>{
      res.status(200).json({
        count:docs.length,
        results:docs.map(doc=>{
          return {
            _id:doc._id,
            cgpa:doc.cgpa,
            sgpa:doc.sgpa,
            semester:doc.semester,
            backlogs:doc.backlogs,
            request :{
              type:"GET",
              url:"http://127.0.0.1:3000/api/result/"+doc._id,
            }
          };
        })
      });
    })
    .catch(error =>{
      res.status(500).json({
        error:error
      });
    });
});

router.post('/',(req,res,next)=>{
  const result = new Result({
    _id:new mongoose.Types.ObjectId(),
    studentid:req.body.studentid,
    cgpa:req.body.cgpa,
    sgpa:req.body.sgpa,
    semester:req.body.semester,
    backlogs:req.body.backlogs,
  });
  Result.save().then(result =>{
    console.log(result);
    res.status(201).json({
      message:"Posted Successfully",
      result:{
      _id:result._id,
      studentid:result.studentid,
      cgpa:result.cgpa,
      sgpa:result.sgpa,
      semester:result.semester,
      backlogs:result.backlogs,
      request:{
        type:"GET",
        url:'http://127.0.0.1:3000/api/result/'+result._id
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

router.get('/:studentID',(req,res,next)=>{
  const id = req.params.studentID;
  Result.findById(id)
    .exec()
    .then(docs=>{
      res.status(200).json(docs);
    })
    .catch(err=>{
      res.status(500).json({
        error:err
      });
    });
});

//Exporting
module.exports = router;
