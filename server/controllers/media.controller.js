import mongoose from "mongoose";
import { mongo } from "mongoose";
import Media from "../models/media.model";
import QueryString from "qs";
import asyncHandler from "express-async-handler";

export const getAllMedia = asyncHandler(async (req, res) => {
  console.log("getAllMedia");
  const media = await Media.find();

  if (media) {
    res.status(201).json({
      success: true,
      message: "Media retrieved successfully.",
      media: media,
    });
  } else {
    res.status(400).json({
      success: false,
      message: "Media retrieval failed.",
    });
  }
});

export const addMedia = asyncHandler(async (req, res) => {
  var id = mongoose.Types.ObjectId();
  console.log("req.body before" + JSON.stringify(req.body))
  var reqJSON = JSON.parse(JSON.stringify(req.body))
  reqJSON._id = id;
  console.log("req.body after" + JSON.stringify(reqJSON))
  const userResponse = await Media.create(reqJSON)
  console.log(JSON.stringify(userResponse))
  if (userResponse) {
    var resJSON = JSON.parse(JSON.stringify(userResponse))
    resJSON._id = id;
    console.log("res json: " + JSON.stringify(resJSON))
    res.status(201).json({    
      media: resJSON,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data.");
  }
});
