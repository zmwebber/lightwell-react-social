import mongoose from 'mongoose';
import Tweets from '../models/tweet.model';
import Favorites from '../models/favorites.model';
import QueryString from 'qs';

const asyncHandler = require('express-async-handler')

export const addFavoritedInteraction = asyncHandler(async (req, res) => {
  const options = { upsert: true };
  console.log('added favorited')
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
      id: x._id,
      tweetId: x.tweetId,
      userId: x.userId
    })
  } else {
    res.status(400)
    throw new Error('Delete failed')
  }
})

export const getFavoritedInteractionsByTweetId = asyncHandler(async (req, res) => {

  const params = req.params
  console.log("GetFavoritesByTweetId for _id: " + params.tweetId + " userId: " + params.userId)

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
