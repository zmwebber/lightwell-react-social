import mongoose from 'mongoose';
import Tweets from '../models/tweet.model';
import Favorites from '../models/favorites.model';

const asyncHandler = require('express-async-handler')

export const addFavoritedInteraction = asyncHandler(async (req, res) => {
  const options = { upsert: true };
  delete req.body._id;
  const newInteraction = req.body;
  let tweetFound = await Favorites.updateOne(newInteraction, newInteraction, options);
  //strip _id from tweet, let mongo generate it.
  if (tweetFound) {
    res.status(201).json({
      id: tweetFound._id,
      tweetId: tweetFound.tweetId,
      userId: tweetFound.userId
    })
  } else {
    res.status(400)
    throw new Error('Insert failed')
  }
})

export const deleteFavoritedInteraction = asyncHandler(async (req, res) => {
  const newInteraction = req.params;
  let foundTweet = await Favorites.findOneAndDelete({ "tweetId": newInteraction.tweetId, "userId": newInteraction.userId });
  if (foundTweet) {
    res.status(201).json({
      id: newInteraction._id,
      tweetId: newInteraction.tweetId,
      userId: newInteraction.userId
    })
  } else {
    res.status(400)
    throw new Error('Delete favorite failed')
  }
})

export const getFavoritedInteractionsByTweetId = asyncHandler(async (req, res) => {

  const params = req.params

  let favoritesCount = await Favorites.count({ 'tweetId': { $eq: params.tweetId } });
  let userHasLiked = await Favorites.count({ 'tweetId': { $eq: params.tweetId }, 'userId': { $eq: params.userId } })

  if (favoritesCount > 0) {
    if (userHasLiked > 0) {
      res.status(201).json({
        'count': favoritesCount,
        'likedByUser': "true",
        'message': 'success',
      })
    } else if (userHasLiked == 0) {
      res.status(201).json({
        'count': favoritesCount,
        'likedByUser': "false",
        'message': 'success',
      })
    }
  } else if (favoritesCount == 0) {
    res.status(201).json({
      'count': favoritesCount,
      'likedByUser': "false",
      'message': 'success',
    })
  }
  else {
    res.status(400).json({
      'message': 'failure',
    })
  }

})
