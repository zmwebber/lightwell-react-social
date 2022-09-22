import ActionModel from "../../models/ActionModel";
import { Tweet } from "../../models/tweetModel";
import actionTypes from "./TweetActionType";
import uuid from 'react-uuid';

export function LoadingTweetAction(){
  return ActionModel(actionTypes.TWEET_LOADING);
}
export function SuccessTweetRetrieval(payload: Tweet){
    payload.id = uuid();
    return ActionModel(actionTypes.TWEET_SUCCESS, payload);
}
