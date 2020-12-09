const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Achievement = require('../models/Achievement');

//Routes
router.get('/',(req,res,next)=>{
  Achievement.find()
    .select('_id studentid achievementType achievementName achievementDate')
    .exec()
    .then(docs=>{
      res.status(200).json({
        count:docs.length,
        achievements:docs.map(doc=>{
          return{
            _id:doc._id,
            studentid:doc.studentid,
            achievementName:doc.achievementName,
            achievementType:doc.achievementType,
            achievementDate:doc.achievementDate,
            request:{
              type:"GET",
              url:"http://127.0.0.1:3000/api/achievement/"+doc._id
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
  const achievement =new Achievement({
    _id:new mongoose.Types.ObjectId(),
    studentid:req.body.studentid,
    achievementType:req.body.achievementType,
    achievementName:req.body.achievementName,
    achievementDate:req.body.achievementDate,
  });
  achievement.save().then(result =>{
    console.log(result);
    res.status(201).json({
      message:"Posted Successfully",
      result:{
        _id:result._id,
        studentid:result.studentid,
        achievementName:result.achievementName,
        achievementType:result.achievementType,
        achievementDate:result.achievementDate,
        request:{
          type:"GET",
          url:'http://127.0.0.1:3000/api/achievement/'+result._id,
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
  Achievement.findById(id)
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

router.delete('/:studentID',(req,res,next)=>{
  const id = req.params.studentID;
  Achievement.remove({_id:id})
    .exec()
    .then(result=>{
      res.status(200).json({
        message:"Deleted Successfully",
        result:result,
      });
    })
    .catch(err=>{
      res.status(500).json({
        error:err
      });
    });
});

//Exporting
module.exports = router;
