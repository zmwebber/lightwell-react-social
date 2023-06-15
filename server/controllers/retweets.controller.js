import mongoose from 'mongoose';
import Tweets from '../models/tweet.model';
import Retweets from '../models/retweets.model';

const asyncHandler = require('express-async-handler')

export const addRetweetInteraction = asyncHandler(async (req, res) => {
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

export const deleteRetweetInteraction = asyncHandler(async (req, res) => {
  const newInteraction = req.params;
  let x = await Retweets.findOneAndDelete({ "tweetId": newInteraction.tweetId, "userId": newInteraction.userId });
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

export const getRetweetInteractionsByTweetId = asyncHandler(async (req, res) => {

  const params = req.params
  console.log("GetRetweetsByTweetId for _id: " + params.tweetId + " userId: " + params.userId)

  let retweetCount = await Retweets.count({ 'tweetId': { $eq: params.tweetId } });
  let userHasRetweeted = await Retweets.count({ 'tweetId': { $eq: params.tweetId }, 'userId': { $eq: params.userId } })

  if (retweetCount > 0) {
    if (userHasRetweeted > 0) {
      res.status(201).json({
        'count': retweetCount,
        'retweetedByUser': "true",
        'message': 'success',
      })
    } else if (userHasRetweeted == 0) {
      res.status(201).json({
        'count': retweetCount,
        'retweetedByUser': "false",
        'message': 'success',
      })
    }
  } else if (retweetCount == 0) {
    res.status(201).json({
      'count': retweetCount,
      'retweetedByUser': "false",
      'message': 'success',
    })
  }
  else {
    console.log("400 ERROR from getRetweetsById method"),
    res.status(400).json({
      'message': 'failure',
    })
  }

})

