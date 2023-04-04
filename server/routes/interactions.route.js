import express from 'express';
//import controller file
import * as interactions from '../controllers/interactions.controller';
// get an instance of express router
const router = express.Router();
router.route('/interactions/')
    // .delete(interactions.deleteInteraction);
    // .get(interactions.getInteractions);
    .post(interactions.addInteraction);
router.route('/interactions/:id')
    .delete(interactions.deleteInteraction);

export default router;