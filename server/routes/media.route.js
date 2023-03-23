// ./express-server/routes/tweet.route.js
import express from "express";
//import controller file
import * as mediaController from "../controllers/media.controller";
// get an instance of express router
const router = express.Router();
router.route("/media/").get(mediaController.getAllMedia);
export default router;
