import mongoose from 'mongoose';
import Tweets from '../models/tweet.model';
import Interaction from '../models/interaction.model';
import QueryString from 'qs';

const asyncHandler = require('express-async-handler')

export const getTweets = (req,res) => {
  console.log('getTweets')
    Tweets.find().exec((err,tweets) => {
    if(err){
    return res.json({'success':false,'message':'getTweets error: ' + err});
    }
return res.json({'success':true,'message':'Tweets fetched successfully',tweets});
  });
}

// create a remove interaction method
// deleteOneById -> pass in _id
// conditional front end logic - if user has already liked, then run delete method. Otherwise, add Interaction.

export const addInteraction = asyncHandler(async(req,res) => {
    const options = { upsert: true };
    console.log('addInteraction')
    delete req.body._id;
    const newInteraction = req.body;
    let x = await Interaction.updateOne(newInteraction, newInteraction, options);
    //strip _id from tweet, let mongo generate it.
    if (x) {
      res.status(201).json({
        id: x._id,
        tweetId: x.tweetId,
        userId: x.userId,
        favorited: x.favorited,
        retweeted: x.retweeted     
    })
  } else {
    res.status(400)
    throw new Error('Insert failed')
  }
})

export const deleteInteraction = asyncHandler(async(req,res) => {
    const options = { upsert: true };
    console.log('deleteInteraction')
    delete req.body._id;
    const newInteraction = req.body;
    let x = await Interaction.deleteOne(newInteraction._id);
    //strip _id from tweet, let mongo generate it.
    if (x) {
      res.status(201).json({
        id: x._id,
        tweetId: x.tweetId,
        userId: x.userId,
        favorited: x.favorited,
        retweeted: x.retweeted     
    })
  } else {
    res.status(400)
    throw new Error('Delete failed')
  }
})
  






export const getTweet = (req,res) => {
  console.log('getTweet')
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
  console.log('deleteTweet')
    Tweets.findByIdAndRemove(req.params.id, (err,tweet) => {
    if(err){
    return res.json({'success':false,'message':'deleteTweet error: ' + err});
    }
return res.json({'success':true,'message':tweet._id+' deleted successfully'});
  })
}
export const getInteractionsById = (req, res) => {
  console.log('getTweetsByUser')
  const qs = QueryString.parse(req.query)
  console.log("GetByUserId for _id: " + qs.userId)
  Tweets.find({'user._id': { $eq: qs.userId }}, (err, tweets) => {
    if (err) {
      return res.json({ 'error': err, 'message': 'bad' })
    }
    return res.json({ 'success': true, 'message': 'Tweets for ' +  qs.userId + ' fetched successfully', tweets });
  });
}

