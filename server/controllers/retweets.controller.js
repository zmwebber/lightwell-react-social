import mongoose from 'mongoose';
import Tweets from '../models/tweet.model';
import Retweets from '../models/retweets.model';
import QueryString from 'qs';

const asyncHandler = require('express-async-handler')

// create a remove interaction method
// deleteOneById -> pass in _id
// conditional front end logic - if user has already liked, then run delete method. Otherwise, add Interaction.

export const addRetweetInteraction = asyncHandler(async(req,res) => {
    const options = { upsert: true };
    console.log('added retweet')
    delete req.body._id;
    const newInteraction = req.body;
    let x = await Retweets.updateOne(newInteraction, newInteraction, options);
    //strip _id from tweet, let mongo generate it.
    if (x) {
      res.status(201).json({
        id: x._id,
        tweetId: x.tweetId,
        userId: x.userId
    })
  } else {
    res.status(400)
    throw new Error('Insert failed')
  }
})

export const deleteRetweetInteraction = asyncHandler(async(req,res) => {
    const options = { upsert: true };
    console.log('deleted retweet')
    delete req.body._id;
    const newInteraction = req.body;
    let x = await Retweets.deleteOne(newInteraction._id, newInteraction.userId);
    //strip _id from tweet, let mongo generate it.
    if (x) {
      res.status(201).json({
        id: x._id,
        tweetId: x.tweetId,
        userId: x.userId  
    })
  } else {
    res.status(400)
    throw new Error('Delete failed')
  }
})
