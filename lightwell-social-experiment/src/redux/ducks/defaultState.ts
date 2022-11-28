import { Tweet } from "../../models/TweetModel"

export interface DefaultStateI {
    tweet: Tweet[],
    loading: boolean,
}

export const initialState = {
    tweet: [],
    loading: false,
}
