import mongoose from 'mongoose';
import Tweets from '../models/tweet.model';
import Favorites from '../models/favorites.model';
import QueryString from 'qs';

const asyncHandler = require('express-async-handler')

// create a remove interaction method
// deleteOneById -> pass in _id
// conditional front end logic - if user has already liked, then run delete method. Otherwise, add Interaction.

export const addFavoritedInteraction = asyncHandler(async(req,res) => {
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

export const deleteFavoritedInteraction = asyncHandler(async(req,res) => {
    const options = { upsert: true };
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
  






// export const getTweet = (req,res) => {
//   console.log('getTweet')
//     Tweets.find({_id:req.params._id}).exec((err,tweet) => {
//     if(err){
//     return res.json({'success':false,'message':'getTweet error: ' + err});
//     }
//     if(tweet.length){
//       return res.json({'success':true,'message':'Tweet fetched by id successfully',tweet});
//     }
//     else{
//       return res.json({'success':false,'message':'Tweet with the given id not found'});
//     }
//   })
// }
// export const deleteTweet = (req,res) => {
//   console.log('deleteTweet')
//     Tweets.findByIdAndRemove(req.params.id, (err,tweet) => {
//     if(err){
//     return res.json({'success':false,'message':'deleteTweet error: ' + err});
//     }
// return res.json({'success':true,'message':tweet._id+' deleted successfully'});
//   })
// }
export const getFavoritedInteractionsById = (req, res) => {
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

//Sum favorited by User

