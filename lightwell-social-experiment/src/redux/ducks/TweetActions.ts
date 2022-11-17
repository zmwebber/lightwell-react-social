import { Tweet } from "../../models/TweetModel";
import actionTypes from "./TweetActionTypes";
import { IActionModel } from "../../models/IActionModel";
import ActionModel from "../../models/ActionModel";

export function LoadingTweetAction() {
    return actionTypes.TWEET_LOADING;
}

export function SentTweet(payload: Tweet) {
    return ActionModel(actionTypes.TWEET_SENT_SUCCESS, payload);
}

export function DeleteTweet(payload:Tweet){
    return actionTypes.TWEET_DELETE, payload;
}