import { Avatar, Button } from '@mui/material';
import { red } from '@mui/material/colors';
import { useState } from 'react';
import "./TweetBox.css";
import { useDispatch, useSelector } from "react-redux";
import { SuccessTweetRetrieval } from '../../redux/ducks/tweetDuck/TweetAction';

function TweetBox() {

  const [twitterTitle, setTwitterTitle] = useState("");
  const [twitterMessage, setTwitterMessage] = useState("");
  const [twitterImage, setTwitterImage] = useState("");
  const dispatch = useDispatch();

  const sendTwitter = (e: any) => {
    e.preventDefault();
    console.log(`Message: ${twitterMessage} and Image: ${twitterImage != "" ? twitterImage : null}`);
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let date = new Date();
    let currentTime = month[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear(); 
    dispatch(SuccessTweetRetrieval(
        { 
          id: "",
          profilePic: "S",
          cardTitle: twitterTitle,
          cardDate: currentTime,
          cardDescription: twitterMessage,
          cardImage: (twitterImage != "" ? twitterImage : null),
          profileLink: "google.com",
          isLiked: false,
          likedCount: 0
        }
      ));
    setTwitterImage("");
    setTwitterMessage("");
    setTwitterTitle("");
  }

  return (
    <form onSubmit={sendTwitter}>
      <div className="homeTweetInput">
        <input onChange={(e) => setTwitterTitle(e.target.value)} value={twitterTitle} placeholder="Title Here" type="text" />
      </div>
      <div className="homeTweetInput">
        <Avatar sx={{ bgcolor: red[500] }}>
          S
        </Avatar>
        <input onChange={(e) => setTwitterMessage(e.target.value)} value={twitterMessage} placeholder="What's happening?" type="text" />
      </div>
      <div className="homeTweetInput">
        <input onChange={(e) => setTwitterImage(e.target.value)} value={twitterImage} placeholder="Temporary Image URL Input" type="text" />
      </div>
      <input type="submit" value="Tweet" className='homeTweetButton'/>
    </form>
  )
}

export default TweetBox