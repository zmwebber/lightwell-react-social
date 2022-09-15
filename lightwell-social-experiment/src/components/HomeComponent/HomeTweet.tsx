import UploadIcon from '@mui/icons-material/Upload';
import { Avatar, Button } from '@mui/material';
import { red } from '@mui/material/colors';
import { useState } from 'react';
import './HomeTweet.css';
import React from 'react';
import TweetBox from '../TweetComponents/TweetBox';


function HomeTweet() {
  /*
    Todo: Make DB call to create new tweet when DB is created
    Also figure out how to upload images or maybe get rid of the only import images all together for just url links.
  */

  return (
    <div className="homeTweet">
        <TweetBox/>
    </div>
  )
}

export default HomeTweet