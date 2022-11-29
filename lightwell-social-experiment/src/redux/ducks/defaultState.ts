import { Tweet } from "../../models/TweetModel"

export interface DefaultStateI {
    tweets: Tweet[],
    loading: boolean,
}

export const initialState: DefaultStateI = {
    tweets: [],
    loading: false
}
