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
import CardContainer from "./CardContainer"

function CardLoop(){
	return (
		<div>
	{data.data.map((item) => {
		return(
			<CardContainer 
			profilePic = {item.profilePic}
			cardTitle = {item.cardTitle}
			cardDate = {item.cardDate}
			cardDescriptions = {item.cardDescriptions}
			cardImage = {item.cardImage}
			/>
		)
	})}
	</div>	
)
}	

export default CardLoop;