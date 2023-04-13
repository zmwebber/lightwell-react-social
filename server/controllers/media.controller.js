import mongoose from "mongoose";
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

// RATHER THAN THE CODE BELOW, IMPLEMENT SIMILAR TO USER.CONTROLLER.JS LINE 32 AND BELOW

// export const addMedia = asyncHandler(async (req, res) => {
//   console.log("addMedia");
//   const newMedia = new Media(req.body);

//   newMedia.save((err, media) => {
//     if (err) {
//       return res.json({ success: false, message: "addMedia error: " + err });
//     }
//     return res.json({
//       success: true,
//       message: "Media added successfully",
//       media,
//     });
//   });
// });19870
