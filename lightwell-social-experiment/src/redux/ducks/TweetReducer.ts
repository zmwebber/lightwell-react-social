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
      isLiked: item.isLiked,
      likedCount: item.likedCount
    };
    dataArray.push(p);
  })
  return dataArray;
}

interface DefaultStateI {
  loading: boolean,
  tweet: Tweet[]
}

export const twitterState: DefaultStateI = {
  loading: false,
  tweet: dataMap()
};

function incrementTweetLike(tweetArray: Tweet[], id : string){
  tweetArray.filter((tweet) => tweet.id === id)[0].likedCount++;
  return tweetArray;
}

function deincrementTweetLike(tweetArray: Tweet[], id : string){
  tweetArray.filter((tweet) => tweet.id === id)[0].likedCount--;
  return tweetArray;
}

function deleteTweet(tweetArray: Tweet[], id: string){
  const tweetIndex = tweetArray.findIndex((tweet) => tweet.id === id);
  tweetArray.splice(tweetIndex, 1);
  return tweetArray;
}

const tweetReducer = (state: DefaultStateI = twitterState, action: IActionModel): DefaultStateI => {
  const { type: actionType } = action;
  switch (actionType) {
    case actionTypes.TWEET_LOADING:
      return {
        loading: true,
        tweet: state.tweet
      }
    case actionTypes.TWEET_SUCCESS:
      return {
        loading: false,
        tweet: state.tweet?.concat(action.payload)
      }
      case actionTypes.TWEET_LIKE:
        return {
          loading: false,
          tweet: incrementTweetLike(state.tweet, action.payload),
        }
        case actionTypes.TWEET_DISLIKE:
          return {
            loading: false,
            tweet: deincrementTweetLike(state.tweet, action.payload),
          }
          case actionTypes.TWEET_DELETE:
            return {
              loading: false,
              tweet: deleteTweet(state.tweet, action.payload),
            }
    default:
      return state
  }
};

export default tweetReducer;