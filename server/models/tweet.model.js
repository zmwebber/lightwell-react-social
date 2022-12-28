import mongoose from 'mongoose';
// https://mongoosejs.com/docs/guide.html
var Schema = mongoose.Schema({
    createdAt:  Date,
    user: String,
    text: String,
    source: String,
    truncated: Boolean,
    is_reply_status: Boolean,
    in_reply_to_status_id: String,
    in_reply_to_user_id: String,
    reply_count: Number,
    is_quote_status: Boolean,
    quoted_status_id: String,
    is_retweeted_status: Boolean,
    retweet_count: Number,
    favorite_count: Number,
    favorited: Boolean,
    links: {
        indicies: [Number],
        url: String,
        text: String,
    },
    hashtags: {
        indicies: [Number],
        text: String
    }
});
export default mongoose.model('Tweets', Schema);