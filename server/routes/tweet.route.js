// ./express-server/routes/tweet.route.js
import express from 'express';
//import controller file
import * as tweetController from '../controllers/tweet.controller';
// get an instance of express router
const router = express.Router();
router.route('/tweets/')
     .get(tweetController.getTweets)
     .post(tweetController.addTweet);     
router.route('/tweets/byId/:id')
      .put(tweetController.updateTweet)
      .get(tweetController.getTweet)
      .delete(tweetController.deleteTweet);
router.route('/tweets/byUser/:userId?')
      .get(tweetController.getTweetsByUser);
export default router;