const express = require('express');
const Posts = require("../models/posts");   // api create karapu model eka gannwa --- 
const router = express.Router();

//save posts --- (create operation /// )
//meka call  back  function ekak -- 
router.post('/post/save',(req,res)=>{
    let newPost = new Posts(req.body);  // create new postSchema dataset ----- 
    newPost.save()
    .then(()=>{
        return res.status(200).json({  // status code api danna one ---
            success:true

        });
    }).catch(()=>{
        return res.status(400).json({
            error:err
        });
    })
})


// GET posts -----      /// 
router.get('/posts',(req,res)=>{
    Posts.find()
    .then((posts)=>{
        return res.status(200).json({ 
            success:true,
            existingPost : posts
        });
    }).catch(()=>{
        return res.status(400).json({
            error:err
        });
    })
}) 
 // Get a specific post ----- ///  localhost:8000/post/64c8def132c4b38c41cab223
 router.get('/post/:id',(req,res)=>{
    Posts.findById(req.params.id)    // find sepecific item in database --- 
    .then((post)=>{
        return res.status(200).json({
            success:true,
            existingPost : post
        });
    }).catch(()=>{
        return res.status(400).json({
            success:false,
            error:err
        });
    })

 })

// Update Posts ------- 
router.put('/post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(req.params.id,req.body,
    {new:true
    })
    .then(()=>{  

        return res.status(200).json({  // status code api danna one ---
            success:'Updated successfully'

        });
    })
    .catch((err)=>{
        console.log(err);
        return res.status(400).json({
            error:err
        });
    })
})


//Delete Posts --- 
router.delete('/post/delete/:id',(req,res)=>{
    Posts.findByIdAndDelete(req.params.id)
    .then((deletedPost)=>{
        return res.status(200).json({
            success:true,
            deletedPost
        });
    })
    .catch((err)=>{
        return res.status(400).json({
            error:err
        });
    })
})




module.exports = router;