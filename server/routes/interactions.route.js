import express from 'express';
//import controller file
import * as favorites from '../controllers/favorites.controller';
// get an instance of express router
const router = express.Router();

router.route('/favorites/')
    .post(favorites.addFavoritedInteraction);
router.route('/favorites/:tweetId/:userId')
    .delete(favorites.deleteFavoritedInteraction);
router.route('/favorites/byId/:tweetId/:userId')
    .get(favorites.getFavoritedInteractionsByTweetId);


export default router;