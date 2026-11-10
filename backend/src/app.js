const express = require('express');
const app = express();
const multer = require('multer');
const uploadFile = require('./service/storage.service');
const Post = require('./models/post.model');
const cors = require('cors');

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
    }));

app.use(express.json());  
const upload = multer ({storage: multer.memoryStorage()});

app.post('/create-post',upload.single('image') , async(req, res)=>{
   
     const result = await uploadFile(req.file.buffer);
     console.log(result);

     const post = await Post.create({
        image: result.url,
        caption: req.body.caption
     })
     res.status(201).json({message: "Post created successfully", post});
});

app.get('/posts', async(req, res)=>{
    const posts = await Post.find();
    res.status(200).json({posts});
});

module.exports = app;