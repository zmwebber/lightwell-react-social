import UploadIcon from '@mui/icons-material/Upload';
import { Avatar, Button } from '@mui/material';
import { red } from '@mui/material/colors';
import { useState } from 'react';
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
    <form onSubmit={sendTwitter}>
      <div className="homeTweetInput">
        <Avatar sx={{ bgcolor: red[500] }}>
          S
        </Avatar>
        <input onChange={(e) => setTwitterMessage(e.target.value)} value={twitterMessage} placeholder="What's happening?" type="text" />
      </div>
      <div className="tempImageUrl">
        <input onChange={(e) => setTwitterImage(e.target.value)} value={twitterImage} placeholder="Temporary Image URL Input" type="text" />
      </div>
      <input type="submit" value="Tweet" className='homeTweetButton'/>
    </form>
  )
}

export default TweetBox