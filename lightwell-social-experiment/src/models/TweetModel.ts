
import actionTypes from "../redux/ducks/TweetActionTypes";


export type Tweet = {
    id: string,
    type: any,
    textContent: string,
    isLiked: boolean,
    name: string,
    handle: string,
    date: string,
    likedCount: number,
    picture: string | null
}

export interface tweetDeleted {
    type: typeof actionTypes.TWEET_DELETE;
}

export interface tweetLoading {
    type: typeof actionTypes.TWEET_LOADING;
}

export interface tweetSent {
    type: typeof actionTypes.TWEET_SENT_SUCCESS;
    payload: Tweet;
}

export interface tweetLiked {
    type: typeof actionTypes.TWEET_LIKED;
    payload: Tweet;
}