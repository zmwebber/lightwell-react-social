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
export function OnLike(payload: string){
  return ActionModel(actionTypes.TWEET_LIKE, payload);
}
export function OnDislike(payload: string){
  return ActionModel(actionTypes.TWEET_DISLIKE, payload);
}
export function OnDelete(payload: string){
  return ActionModel(actionTypes.TWEET_DELETE, payload);
}
