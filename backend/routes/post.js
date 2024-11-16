import express from 'express';
import Post from '../model/post.js'
import app from "../app.js";

const router = express.Router();

router.post('', (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });

  post.save().then(result => {
    res.status(201).json(

      {
        success: true,
        postId: result._id
      }
    );
  });
});

router.put('/:id', (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  Post.updateOne({_id: req.params.id}, post)
    .then(result => {
      res.status(200).json({success: true});
    });
});

router.get('', (req, res, next) => {
  Post.find()
    .then(data => {
      console.log(data)
      res.status(200).json({
        success: true,
        data: data
      });
    });
});

router.get('/:id', (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({
        success: false,
        message: 'data not found'
      });
    }
  });
});

router.delete('/:id', (req, res, next) => {
  Post.deleteOne({_id: req.params.id}).then(result => {
    res.status(200).json({success: true});
  });
});

router.get('/:id', (req, res, next) => {
  const postId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(postId)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid Post ID'
    });
  }

  Post.findById(postId)
    .then(post => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({
          success: false,
          message: 'Post not found'
        });
      }
    })
    .catch(error => {
      console.error('Error fetching post:', error);
      res.status(500).json({
        success: false,
        message: 'Server error'
      });
    });
});


export default router;
