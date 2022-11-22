import actionTypes from "../redux/ducks/tweetDuck/TweetActionType";

export type Tweet = 
    {
     id: string;
     profilePic: string;
     cardTitle: string;
     cardDate: string;
     cardDescription: string;
     cardImage: string | null;
     profileLink: string;
     isLiked: boolean;
     likedCount: number;
    }

    

    export interface TweetLoading {
        type: typeof actionTypes.TWEET_LOADING;
    }

    export interface TweetSuccess {
        type: typeof actionTypes.TWEET_SUCCESS;
        payload: Tweet;
    }

    export type TweetDispatchTypes =
  | TweetLoading
  | TweetSuccess;

