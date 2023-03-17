//TODO: Refactor - remove this model, not needed here, goes in redux or not at all
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