import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import './CardContainer.css';
import TwitterCardMenuList from './TwitterCardMenuList';
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store";
import {OnDislike, OnLike} from "../../redux/ducks/tweetDuck/TweetAction";
import { Alert, Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';


function CardLayout(props: any) {

  // const tweetState = useSelector((state: RootStore) => state.tweetArray);
  const [isLiked, setIsLiked] = useState(props.isLiked);
  const dispatch = useDispatch();
  const tweetState = useSelector((state: RootStore) => state.tweetArray);
  const tweetLikeCount = tweetState.tweet.filter((tweet) => tweet.id === props.cardId)[0].likedCount;
  const [likeCount, setLikeCount] = useState<number | null>(null);

  useEffect(() => {
    setLikeCount(tweetLikeCount)
     },[tweetLikeCount])



  function onClickLike(event: React.MouseEvent<HTMLElement>, id: string) {
    if(event.button === 0){
      dispatch(OnLike(id));
    }
    setLikeCount(tweetLikeCount);
  }

  function onClickDislike(event: React.MouseEvent<HTMLElement>, id: string) {
    if(event.button === 0){
      dispatch(OnDislike(id));
    }
    setLikeCount(tweetLikeCount);
  }

  //Todo: add share button functionality

  function onClickShare() {
    navigator.clipboard.writeText("localhost:3000/" + props.cardId);
    console.log("Test");
  }

  return (
    <div className="cardContainer">
      <p className="App-header">
        <Card sx={{ maxWidth: 1000, minWidth: 800 }} style={{ textAlign: "left" }} id={props.id}>
          <CardHeader
            avatar={
              <div className='avatarLink'>
                <a href={props.profileLink}>
                  <Avatar sx={{ bgcolor: red[500] }}>
                    {props.profilePic}
                  </Avatar>
                </a>
              </div>
            }
            action={
              <IconButton aria-label="options" >
                <TwitterCardMenuList 
                  id = {props.cardId}
                />
              </IconButton>
            }
            title={props.cardTitle}
            subheader={props.cardDate}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {props.cardDescriptions}
            </Typography>
          </CardContent>
          {props.cardImage != null ? <CardMedia
            component="img"
            height="400"
            src={props.cardImage || null}
            alt="React Logo"
          /> : null}
          <CardActions disableSpacing>
            <IconButton aria-label="like" className={`${isLiked && 'heartIconActive'}`} onClick = {event => onClickLike(event, props.cardId)}>
              {likeCount} 
            </IconButton>
            <IconButton aria-label="like" className={`${isLiked && 'heartIconActive'}`} onClick = {event => onClickLike(event, props.cardId)}>
               <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="like" className={`${isLiked && 'heartIconActive'}`} onClick = {event => onClickDislike(event, props.cardId)}>
              <HeartBrokenIcon />
            </IconButton>
            <IconButton aria-label="share" onClick={onClickShare}>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </p>
    </div>
  )
}

export default CardLayout;