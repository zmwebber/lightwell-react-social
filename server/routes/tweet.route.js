// ./express-server/routes/tweet.route.js
import express from 'express';
//import controller file
import * as tweetController from '../controllers/tweet.controller';
// get an instance of express router
const router = express.Router();
router.route('/tweets/')
     .get(tweetController.getTweets)
     .post(tweetController.addTweet)
     .put(tweetController.updateTweet);
router.route('/tweets/:id')
      .get(tweetController.getTweet)
      .delete(tweetController.deleteTweet);
export default router;