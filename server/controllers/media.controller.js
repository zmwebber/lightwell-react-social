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

export const addMedia = asyncHandler(async (req, res) => {
  const newMedia = req.body;
  const userResponse = await Media.create(newMedia);

  if (userResponse) {
    res.status(201).json({
      media: userResponse,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data.");
  }
});
