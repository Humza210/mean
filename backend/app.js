//d6DF4id7Rnj7pzdK
//mongodb+srv://hamjad:d6DF4id7Rnj7pzdK@cluster0.ewylj.mongodb.net/project?retryWrites=true&w=majority&appName=Cluster0
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose";


mongoose.connect(process.env.MONGO_KEY)
  .then(() => {
    console.log('connected to db');
  }).catch(() => {
  console.log('connection failed');
});

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false})); //used for URL encoding, e.i. Hello%20World%26

//adding header data
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});



export default app;
