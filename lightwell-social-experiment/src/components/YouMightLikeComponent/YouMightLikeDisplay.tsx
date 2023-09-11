import { Tweet } from "../../models/TweetModel";
import React from 'react'

export function YMLDisplay(tweet: Tweet) {



  function getUserProfilePicture() {
    let id = tweet.user._id

  }

  return (
    // TODO: add profile picture
    <div>
			<div>{tweet.user.name}</div>
			<b>{tweet.user.screen_name}</b>
    </div>
  )
}