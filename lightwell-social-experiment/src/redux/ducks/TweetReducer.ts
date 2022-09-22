import { Tweet } from "../../models/tweetModel";
import actionTypes from "./TweetActionType";
import IActionModel from "../../interfaces/IActionModel";
import data from "../../testData.json";

function dataMap() {
  let dataArray: Tweet[] = [];
  data.data.map((item) => {
    let p: Tweet = {
      id: item.id,
      profilePic: item.profilePic,
      cardTitle: item.cardTitle,
      cardDate: item.cardDate,
      cardDescription: item.cardDescriptions,
      cardImage: item.cardImage,
      profileLink: item.profileLink,
      isLiked: item.isLiked
    };
    dataArray.push(p);
  })
  return dataArray;
}

interface DefaultStateI {
  loading: boolean,
  tweet?: Tweet[]
}

export const twitterState: DefaultStateI = {
  loading: false,
  tweet: dataMap()
};

const tweetReducer = (state: DefaultStateI = twitterState, action: IActionModel): DefaultStateI => {
  const { type: actionType } = action;
  switch (actionType) {

    case actionTypes.TWEET_LOADING:
      return {
        loading: true,
      }
    case actionTypes.TWEET_SUCCESS:
      return {
        loading: false,
        tweet: state.tweet?.concat(action.payload)
      }
    default:
      return state
  }
};

export default tweetReducer;