import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react'
import UploadIcon from '@mui/icons-material/Upload';
import { red } from '@mui/material/colors';
import "./TweetBox.css";

function TweetBox() {

    const [twitterMessage, setTwitterMessage] = useState("");
    const [twitterImage, setTwitterImage] = useState("");


    const sendTwitter = (e: any) => {
        e.preventDefault();
        console.log(`Message: ${twitterMessage} and Image: ${twitterImage != "" ? twitterImage : null}`);
        setTwitterImage("");
        setTwitterMessage("");
    }

  return (
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
  )
}

export default TweetBox