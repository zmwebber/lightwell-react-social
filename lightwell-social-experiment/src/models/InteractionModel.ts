import { Tweet } from "./TweetModel"

export type Interaction = {
    favorited: boolean,
    retweeted: boolean,
    comment: Tweet
}

