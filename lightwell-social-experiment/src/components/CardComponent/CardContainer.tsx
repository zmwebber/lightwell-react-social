import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
import './CardContainer.css'
import data from "../../testData.json";

function CardContainer(props: any){
    return(
        <div>
                    <p className="App-header">
          <Card sx={{ maxWidth: 1000, minWidth: 800 }} style={{ textAlign: "left" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {props.profilePic}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings" >
                  <MoreVertIcon />
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
            <CardMedia
              component="img"
              height="400"
              image={props.cardImage || null}
              alt="React Logo"
            />
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </p>
        </div>
    )
}

export default CardContainer;