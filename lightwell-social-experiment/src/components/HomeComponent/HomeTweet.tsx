import { Avatar, Button } from '@mui/material';
import React from 'react';
import './HomeTweet.css';
import { red } from '@mui/material/colors';
import UploadIcon from '@mui/icons-material/Upload';

function HomeTweet() {
  return (
    <div className="homeTweet">
        <form>
            <div className="homeTweetInput">
                <Avatar sx={{ bgcolor: red[500] }}>
                    S
                </Avatar>
                <input placeholder="What's happening?" type="text" />
            </div>
            <div className="tempImageUrl">
              <input placeholder="Temporary Image URL Input" type="text" />
            </div>
              <label htmlFor="file-upload" className="custom-file-upload">
                <UploadIcon></UploadIcon> Image Upload
              </label>
            <input id="file-upload" type="file" name="tweetImage" accept ="image/png, image/gif, image/jpeg"></input>
            <Button className='homeTweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default HomeTweet