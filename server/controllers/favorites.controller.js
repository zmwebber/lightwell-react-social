import mongoose from 'mongoose';
import Tweets from '../models/tweet.model';
import Favorites from '../models/favorites.model';
import QueryString from 'qs';

const asyncHandler = require('express-async-handler')

// create a remove interaction method
// deleteOneById -> pass in _id
// conditional front end logic - if user has already liked, then run delete method. Otherwise, add Interaction.

export const addFavoritedInteraction = asyncHandler(async (req, res) => {
  const options = { upsert: true };
  console.log('added favorited')
  delete req.body._id;
  const newInteraction = req.body;
  let x = await Favorites.updateOne(newInteraction, newInteraction, options);
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

export const deleteFavoritedInteraction = asyncHandler(async (req, res) => {
  console.log('deleted favorited')
  delete req.body._id;
  const newInteraction = req.body;
  let x = await Favorites.deleteOne(newInteraction._id, newInteraction.userId);
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

export const getFavoritedInteractionsByTweetId = asyncHandler(async (req, res) => {

  const params = req.params
  console.log("GetFavoritesByTweetId for _id: " + params.tweetId + " userId: " + params.userId)

  let favoritesCount = await Favorites.count({ 'tweetId': { $eq: params.tweetId } });
  let userHasLiked = await Favorites.count({ 'tweetId': { $eq: params.tweetId }, 'userId': { $eq: params.userId } })

  console.log("Favorite Count: " + favoritesCount)
  console.log("Response from getUserHasLiked method: " + userHasLiked);

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

// export const getUserHasLiked = asyncHandler(async (req, res) => {
//   const qs = QueryString.parse(req.query)
//   console.log("getUserHasLiked method hit: " + qs.userId + " TweetID: " + qs.tweetId);
//   let x = await Favorites.count({ 'tweetId': { $eq: qs.tweetId }, 'userId': { $eq: qs.userId } })
//   console.log("Response from getUserHasLiked method: " + x);
//   if (x > 0) {
//     res.status(201).json({
//       'likedByUser': "true"
//     })
//   } else {
//     res.status(204).json({
//       'likedByUser': "false"
//     })
//   }
// })

