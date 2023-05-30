import mongoose from 'mongoose';

var Schema = mongoose.Schema({
    userId: String,
    tweetId: String,
    //comment?: Tweet
});

export default mongoose.model('Favorites', Schema);