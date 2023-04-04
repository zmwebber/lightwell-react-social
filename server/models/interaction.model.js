import mongoose from 'mongoose';

var Schema = mongoose.Schema({
    userId: String,
    tweetId: String,
    favorited: Boolean,
    retweeted: Boolean,
    // comment:
});

export default mongoose.model('Interactions', Schema);