import mongoose from "mongoose";
// https://mongoosejs.com/docs/guide.html
var Schema = mongoose.Schema({
  data: String,
  fileName: String,
  contentType: String,
  createdAt: Date,
});
export default mongoose.model("Media", Schema);
