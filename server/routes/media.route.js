// ./express-server/routes/tweet.route.js
import express from "express";
import * as mediaController from "../controllers/media.controller";

const router = express.Router();

router.route("/media/").get(mediaController.getAllMedia);
router.route("/media/").post(mediaController.addMedia);

export default router;
