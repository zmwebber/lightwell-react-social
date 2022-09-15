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
// import '../App.css';
import { useState } from 'react';
import './CardContainer.css';
import TwitterCardMenuList from './TwitterCardMenuList';


function CardContainer(props: any) {

  const [likeCount, setLikeCount] = useState<number>(0);
  const [isLiked, setIsLiked] = useState(props.isLiked);

  /*
    Todo:Add like toggle ability with DB when DB functionality is implemented
  */
  function onClickLike() {
    if (isLiked != true) {
      setIsLiked(!isLiked);
      setLikeCount(likeCount + 1);
    }
    else {
      setIsLiked(!isLiked);
      setLikeCount(likeCount - 1);
    }
  }

  //Todo: add share button functionality

  function onClickShare() {
    console.log("Test");
  }

  return (
    <div className="cardContainer">
      <p className="App-header">
        <Card sx={{ maxWidth: 1000, minWidth: 800 }} style={{ textAlign: "left" }}>
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
                <TwitterCardMenuList />
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
            <IconButton aria-label="like" className={`${isLiked && 'heartIconActive'}`} onClick={onClickLike}>
              {likeCount}<FavoriteIcon />
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

export default CardContainer;