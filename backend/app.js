const express = require('express');

const app = express();

const mongoose = require('mongoose');
require('dotenv/config');

const morgan = require('morgan');

const bodyParser = require('body-parser');

//Import Routes
const feedbackRoutes = require('./api/routes/feedback');
const resultRoutes = require('./api/routes/result');
const achievementRoutes = require('./api/routes/achievement');
const attendanceRoutes = require('./api/routes/attendance');


//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {useNewUrlParser: true,useUnifiedTopology: true},
  ()=>{ console.log('Connected to DB!');
});

//// WARNING:
mongoose.Promise = global.Promise;
//Mainting logs with morgan
app.use(morgan('dev'));

//Converting the data to json
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Allowing CORS access
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','*');
  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods','PUT , POST , PATCH , DELETE , GET');
    return res.status(200).json({});
  }
  next();
});

//Middleware
app.use('/api/feedback',feedbackRoutes);
app.use('/api/result',resultRoutes);
app.use('/api/achievement',achievementRoutes);
app.use('/api/attendance',attendanceRoutes);

//Hanfling errors
app.use((req,res,next)=>{
  const error = new Error('Not found');
  error.status =404;
  next(error);
});

app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  res.json({
    error:{
      message: error.message,
    }
  });
});



//Start Listening
const port = 3000 || process.env.PORT;
app.listen(port);
