import actionTypes from "../redux/ducks/tweetDuck/TweetActionTypes";

export type Tweet = {
    id: string,
    // type: any,
    textContent: string,
    isLiked: boolean,
    name: string,
    handle: string,
    profilePicture: string | undefined,
    date: string,
    likedCount: number,
    contentPicture: string | null
}

///////////////////////////////////////////////

interface ITweetDeleted {
    type: string;
    payload: Tweet["id"];
}

export function TweetDeleted(
    type: string,
    payload: Tweet["id"]
): ITweetDeleted {
    return ({
        type: type,
        payload: payload
    })
}

///////////////////////////////////////////////

interface ITweetsLoading {
    type: typeof actionTypes.TWEETS_LOADING;
    payload: boolean;
}

export function TweetsLoading(
    type: string,
    payload: boolean
): ITweetsLoading {
    return ({
        type: type,
        payload: payload
    })
}

///////////////////////////////////////////////

interface ITweetLiked {
    type: typeof actionTypes.TWEET_LIKED;
    payload: Tweet["likedCount"];
}

export function TweetLiked(
    type: string,
    payload: Tweet["likedCount"]
): ITweetLiked {
    return ({
        type: type,
        payload: payload
    })
}