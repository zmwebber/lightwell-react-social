import { Tweet } from "../../../models/TweetModel";
import tweetFormActionTypes from "./TweetFormActionTypes";
import {IActionModel} from "../../../models/ActionModel"
import { DefaultStateI, initialState } from "../defaultState";

export const tweetFormReducer = (state: DefaultStateI = initialState, action: IActionModel ) => {
    //Explain why type has to be actionType......
    const { type: actionType } = action;
    switch (actionType) {
        case tweetFormActionTypes.FORM_SUBMIT: {
            console.log(state.tweet);
            return { tweet: state.tweet.concat(action.payload), loading: false }
            //On FORM_SUBMIT -> add tweet to array.
            
        }
        case tweetFormActionTypes.FORM_LOAD: {
            return { ...state, loading: true }
        }
        default:
            return state;
    }
}

export default tweetFormReducer;