import express from 'express';
//import controller file
import * as tweetLikeController from '../controllers/tweetLikes.controller';
// get an instance of express router
const router = express.Router();
router.route('/globalTweetLikes/')
     .get(tweetLikeController.getGlobalLikes)
     .post(tweetLikeController.addGlobalLikes)
     .delete(tweetLikeController.deleteGlobalLikes);
     
// router.route('/globalTweetLikes/')
//       //.put(tweetLikeController.updateGlobalLikes)
//       .get(tweetLikeController.getGlobalLikes)
//       // .post(tweetLikeController.addGlobalLikes);
//       .delete(tweetLikeController.deleteGlobalLikes);
export default router;