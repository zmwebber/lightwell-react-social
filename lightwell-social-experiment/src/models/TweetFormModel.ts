import tweetFormActionTypes from "../redux/ducks/tweetFormDuck/TweetFormActionTypes";
import { Tweet } from "./TweetModel";

export interface ITweetFormSubmitted {
    type: string;
    payload: Tweet;
}

export function TweetFormSubmitted(
    type: string,
    payload: Tweet
): ITweetFormSubmitted {
    return ({
        type: type,
        payload: payload
    })
}

//////////////////////////////////////////

interface ITweetFormLoading {
    type: string;
    payload: boolean;
}

export function TweetFormLoading(
    type: string,
    payload: boolean
): ITweetFormLoading {
    return ({
        type: type,
        payload: payload
    })
}