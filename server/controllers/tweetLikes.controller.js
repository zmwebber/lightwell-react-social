import mongoose from 'mongoose';
//import models
import TweetLikes from '../models/tweetLike.model';
// https://mongoosejs.com/docs/tutorials/findoneandupdate.html

// I guess this table should have an add + delete.
// When a user creates a new tweet, the tweet's ID is added to this table with a blank array to hold User IDs.
export const updateLikes = (req,res) => {
    TweetLikes.findOneAndUpdate({ _id:req.body._id }, req.body, { new:true }, (err,tweet) => {
    if(err){
        return res.json({'success':false,'message':'updateLikes error','error':err});
    }
    console.log(tweet);
    return res.json({'success':true,'message':'Tweet updated successfully',tweet});
  })
}
export const addLikes = (req,res) => {
  delete req.body._id;
  const tweetLikes = new TweetLikes(req.body);
  //strip _id from tweet, let mongo generate it.
  tweetLikes.save((err,tweet) => {
    if(err){
        return res.json({'success':false,'message':'addLikes error: ' + err});
    }
    return res.json({'success':true,'message':'TweetLikes added successfully',tweet});
  })
}
export const getTweetLikes = (req,res) => {
    TweetLikes.find({_id:req.params._id}).exec((err,tweetLikes) => {
    if(err){
        return res.json({'success':false,'message':'getTweetLikes error: ' + err});
    }
    if(tweetLikes.length){
      return res.json({'success':true,'message':'Tweet fetched by id successfully',tweet});
    }
    else{
      return res.json({'success':false,'message':'Tweet with the given id not found'});
    }
  })
}
// When a tweet is deleted, it's ID should be removed from this collection.

// export const deleteTweet = (req,res) => {
//     TweetLikes.findByIdAndRemove(req.params.id, (err,tweet) => {
//     if(err){
//     return res.json({'success':false,'message':'deleteTweet error: ' + err});
//     }
// return res.json({'success':true,'message':tweet._id+' deleted successfully'});
//   })
// }