// Tweet form actions - show form, hide form, form submit success, form submit fail
// FORM_SUBMIT should take a payload of tweet
// FORM_LOAD should set status to loading
// FORM_FAIL should set status to failed? Not necessary

import { Tweet } from "../../../models/TweetModel";
import ActionModel from "../../../models/ActionModel";
import actionTypes from "./TweetFormActionTypes";
import {TweetFormSubmitted, TweetFormLoading} from "../../../models/TweetFormModel";

export function tweetFormSubmitted(payload: Tweet) {
    return TweetFormSubmitted(actionTypes.FORM_SUBMIT, payload)
}

export function tweetFormLoading(payload: boolean) {
    return TweetFormLoading(actionTypes.FORM_LOAD, payload)
}