import UploadIcon from '@mui/icons-material/Upload';
import { Avatar, Button } from '@mui/material';
import { red } from '@mui/material/colors';
import { useState } from 'react';
import './HomeTweet.css';
import React from 'react';


function HomeTweet() {

  const [twitterMessage, setTwitterMessage] = useState("");
  const [twitterImage, setTwitterImage] = useState("");

  /*
    Todo: Make DB call to create new tweet when DB is created
    Also figure out how to upload images or maybe get rid of the only import images all together for just url links.
  */
  const sendTwitter = (e: any) => {

    e.preventDefault();

    console.log(`Message: ${twitterMessage} and Image: ${twitterImage != "" ? twitterImage : null}`)
  }

  return (
    <div className="homeTweet">
        <form>
            <div className="homeTweetInput">
                <Avatar sx={{ bgcolor: red[500] }}>
                    S
                </Avatar>
                <input onChange={(e) => setTwitterMessage(e.target.value)} value = {twitterMessage}  placeholder="What's happening?" type="text" />
            </div>
            <div className="tempImageUrl">
              <input onChange={(e) => setTwitterImage(e.target.value)} value = {twitterImage} placeholder="Temporary Image URL Input" type="text" />
            </div>
              <label htmlFor="file-upload" className="custom-file-upload">
                <UploadIcon></UploadIcon> Image Upload
              </label>
            <input id="file-upload" type="file" name="tweetImage" accept ="image/png, image/gif, image/jpeg"></input>
            <Button onClick={sendTwitter} className='homeTweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default HomeTweet