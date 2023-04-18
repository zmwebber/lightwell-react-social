import express from 'express';
//import controller file
import * as favorites from '../controllers/interactions.controller';
// get an instance of express router
const router = express.Router();
router.route('/favorites/')
    // .delete(interactions.deleteInteraction);
    // .get(interactions.getInteractions);
    .post(favorites.addFavoritedInteraction);
router.route('/favorites/:tweetId/:userId')
    .delete(favorites.deleteFavoritedInteraction);

export default router;