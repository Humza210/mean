
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from "mongoose";

import postRoutes from './routes/post.js';

import Post from './model/post.js'


mongoose.connect(process.env.MONGO_KEY)
  .then(() => {
    console.log('connected to db');
    console.log(process.env.MONGO_KEY)

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

  app.use('/api/posts', postRoutes);
});



export default app;
