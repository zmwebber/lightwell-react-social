import mongoose from "mongoose";

var Schema = mongoose.Schema({
  data: String,
  fileName: String,
  contentType: String,
  createdAt: Date,
});

export default mongoose.model("Media", Schema);
