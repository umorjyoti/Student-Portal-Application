const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Attendance = require('../models/Attendance');
//Routes
router.get('/',(req,res,next)=>{
  Attendance.find()
    .select('_id studentid subname attendance')
    .exec()
    .then(docs=>{
      res.status(200).json({
        count:docs.length,
        achievements:docs.map(doc=>{
          return {
            _id:doc._id,
            studentid:doc.studentid,
            subname:doc.subname,
            attendance:doc.attendance,
            request:{
              type:'GET',
              url:'http://127.0.0.1:3000/api/attendance/'+doc._id
            }
          };
        }),
      });
    })
    .catch(err=>{
      res.status(500).json({
        error:err
      });
    });
});
router.post('/',(req,res,next)=>{
  const attendance =new Attendance({
    _id:new mongoose.Types.ObjectId(),
    studentid:req.body.studentid,
    subname:req.body.subname,
    attendance:req.body.attendance,
  });
  attendance.save()
    .then(result =>{
      res.status(201).json({
        message:"Posted Successfully",
        result:{
        _id:result._id,
        studentid:result.studentid,
        subname:result.subname,
        attendance:result.attendance,
        request:{
          type:"GET",
          url:'http://127.0.0.1:3000/api/attendance/'+result._id
        }
      },
      });
    })
    .catch(err=>{
      res.status(500).json({
        error:err
      });
    });
});

router.get('/:studentID',(req,res,next)=>{
  const id = req.params.studentID;
  Attendance.findById(id)
    .exec()
    .then(doc=>{
      res.status(200).json(doc);
    })
    .catch(err=>{
      res.status(500).json({
        error:err,
      });
    });
});

router.patch('/:studentID',(req,res,next)=>{
  const id = req.params.studentID;
  const updateOps= {};
  for(const ops of req.body){
    updateOps[ops.propName] = ops.value;
  }
  Attendance.update({_id:id},{$set : updateOps})
    .exec()
    .then(doc=>{
      res.status(200).json({
        message:"Updated Successfully",
        result:{
          type:"GET",
          url:'http://127.0.0.1:3000/api/attendance/'+id,
        },
      });
    })
    .catch(err=>{
      res.status(500).json({
        error:err,
      });
    });
});

//Exporting
module.exports = router;
