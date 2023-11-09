import { Tweet } from "../../models/TweetModel";
import React from 'react'
import { useState, useEffect } from "react";
import { getBase64DataUrl } from "../../app/functions/profilePictureBase64Converter";

export function YMLDisplay(tweet: Tweet) {
// TODO: add profile picture
  // const [profilePhotoPreview, setProfilePhotoPreview] = useState<string | undefined>("");

  // useEffect(() => {
  //   let profilePhotoSource = getBase64DataUrl(props.profile_image);
  //   setProfilePhotoPreview(profilePhotoSource);
  // }, []);


  // function getUserProfilePicture() {
  //   let id = tweet.user._id
  // }

  function handleClick() {
    window.location.href = `/profile/${tweet.user.screen_name}`;
  }

  return (

    <>
      {/* <div>
        <img src={profilePhotoPreview} alt="banner-pic" />
      </div> */}

      <div key={tweet._id}>
        <div>{tweet.user.name}</div>
        <b onClick={handleClick}>{tweet.user.screen_name}</b>
      </div>
    </>
  )
}