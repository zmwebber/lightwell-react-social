import data from "../../testData.json";
import CardContainer from "./CardContainer";
import './CardContainer.css';

function CardLoop() {
	return (
		<div>
			{data.data.map((item) => {
				return (
					<CardContainer
						profilePic={item.profilePic}
						cardTitle={item.cardTitle}
						cardDate={item.cardDate}
						cardDescriptions={item.cardDescriptions}
						cardImage={item.cardImage}
						profileLink={item.profileLink}
						isLiked={item.isLiked}
					/>
				)
			})}
		</div>
	)
}

export default CardLoop;