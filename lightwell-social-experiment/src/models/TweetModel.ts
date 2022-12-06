//import actionTypes from "../redux/ducks/tweetDuck/TweetActionTypes";
//shouldnt have to do this -- lets talk about it -- Zac

export type Tweet = {
    id: string,
    // type: any,
    textContent: string,
    isLiked: boolean,
    name: string,
    handle: string,
    profilePicture: string,
    date: string,
    likedCount: number,
    contentPicture: string | null
}

