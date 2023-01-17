import express from 'express';
//import controller file
import * as tweetLikeController from '../controllers/tweetLikes.controller';
// get an instance of express router
const router = express.Router();
router.route('/tweetLikes/')
     .get(tweetLikeController.getTweetLikes)
     .post(tweetLikeController.addLikes);
     
router.route('/tweetLikes/:id')
      .put(tweetLikeController.updateLikes)
      .get(tweetLikeController.getTweetLikes)
      //.delete(tweetLikesController.deleteTweet);
export default router;