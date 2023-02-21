import mongoose from 'mongoose';
// https://mongoosejs.com/docs/guide.html
var Schema = mongoose.Schema({
    // every tweet has a string array of users that like it.
    tweet_id: String,
    user_id: String,
    interaction: String,
});
export default mongoose.model('GlobalTweetLikes', Schema);