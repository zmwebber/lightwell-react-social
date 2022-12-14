//import actionTypes from "../redux/ducks/tweetDuck/TweetActionTypes";
//shouldnt have to do this -- lets talk about it -- Zac

export type Tweet = {
    _id?: string | null,
    createdAt:  Date,
    user: string,
    text: string,
    source: string,
    truncated: boolean,
    is_reply_status: boolean,
    in_reply_to_status_id: string,
    in_reply_to_user_id: string,
    reply_count: number,
    is_quote_status: boolean,
    quoted_status_id: string,
    is_retweeted_status: boolean,
    retweet_count: number,
    favorite_count: number,
    favorited: boolean,
    links: {
        indicies: [number],
        url: string,
        text: string,
    },
    hashtags: {
        indicies: [number],
        text: string
}}
