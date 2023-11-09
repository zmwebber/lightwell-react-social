import mongoose from 'mongoose';
import Tweets from '../models/tweet.model';

import QueryString from 'qs';


export const getTweets = (req,res) => {
    Tweets.find().exec((err, tweets) => {
    if(err){
      return res.json({'success':false,'message':'getTweets error: ' + err});
    }
    return res.json({'success':true,'message':'Tweets fetched successfully', tweets});
  });
}
export const addTweet = (req,res) => {
  delete req.body._id;
  const newTweet = new Tweets(req.body);
  //strip _id from tweet, let mongo generate it.
  newTweet.save((err,tweet) => {
    if(err){
      return res.json({'success':false,'message':'addTweet error: ' + err});
    }
    return res.json({'success':true,'message':'Tweet added successfully',tweet});
  })
}
export const updateTweet = (req,res) => {
    Tweets.findOneAndUpdate({ _id:req.body._id }, req.body, { new:true }, (err,tweet) => {
    if(err){
      return res.json({'success':false,'message':'updateTweet error','error':err});
    }
    return res.json({'success':true,'message':'Tweet updated successfully',tweet});
  })
}
export const getTweet = (req,res) => {
    Tweets.find({_id:req.params._id}).exec((err,tweet) => {
    if(err){
    return res.json({'success':false,'message':'getTweet error: ' + err});
    }
    if(tweet.length){
      return res.json({'success':true,'message':'Tweet fetched by id successfully',tweet});
    }
    else{
      return res.json({'success':false,'message':'Tweet with the given id not found'});
    }
  })
}
export const deleteTweet = (req,res) => {
    Tweets.findByIdAndRemove(req.params.id, (err,tweet) => {
    if(err){
    return res.json({'success':false,'message':'deleteTweet error: ' + err});
    }
return res.json({'success':true,'message':tweet._id + ' deleted successfully'});
  })
}
export const getTweetsByUser = (req, res) => {
  const qs = QueryString.parse(req.query)
  Tweets.find({'user._id': { $eq: qs.userId }}, (err, tweets) => {
    if (err) {
      return res.json({ 'error': err, 'message': 'bad' })
    }
    return res.json({ 'success': true, 'message': 'Tweets for ' +  qs.userId + ' fetched successfully', tweets });
  });
}

export const getYmlTweets = async(req, res) => {

  // i am passing in an id through the req. userId
  const qs = QueryString.parse(req.query)


  const ymlTweets = await Tweets.aggregate([
    { $match: { "user._id": { $ne: qs.userId } } },
    { $group: { _id: "$user._id", tweets: { $push: "$$ROOT" } } },
    { $sample: { size: 2 } },
    { $project: { _id: 0, tweet: { $arrayElemAt: ["$tweets", 0] } } },
    { $replaceRoot: { newRoot: "$tweet" } }
  ])
    if (ymlTweets) {
      res.status(201).json({
        success: true,
        message: "Tweets retrieved successfully",
        ymlTweets: ymlTweets,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "cannot find tweets"
      });
    }

};
