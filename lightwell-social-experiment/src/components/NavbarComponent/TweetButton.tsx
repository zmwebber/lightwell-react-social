import { Button } from '@mui/material'
import React from 'react'

// Todo: Add tweetMenuClick functionality

function TweetButton() {

    const tweetMenuClick = () => {
        console.log("Clicked Tweet Button");
    }

  return (
    <div>
        <Button onClick={tweetMenuClick} variant="outlined" className="navbarButton" fullWidth>Tweet</Button>
    </div>
  )
}

export default TweetButton