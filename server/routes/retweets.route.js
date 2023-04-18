import express from 'express';
//import controller file
import * as retweets from '../controllers/retweets.controller';
// get an instance of express router
const router = express.Router();

router.route('/retweets/')
    .post(retweets.addRetweetInteraction);
router.route('/retweets/:tweetId/:userId')
    .delete(retweets.deleteRetweetInteraction);

export default router;