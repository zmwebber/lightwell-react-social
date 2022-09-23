import data from "../../testData.json";
import CardLayout from "./Card";
import './CardContainer.css';
import { RootStore } from "../../store";
import { LoadingTweetAction,  SuccessTweetRetrieval} from "../../redux/ducks/TweetAction";
import {Tweet} from "../../models/tweetModel";
import IActionModel from "../../interfaces/IActionModel";
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { twitterState } from "../../redux/ducks/TweetReducer";

function CardContainer() {

	const tweetState = useSelector((state: RootStore) => state.tweetArray);

	//Attempt at file write
	// useEffect(() => {
	// 	jsonUpdate();
	// });

	// const jsonUpdate = () => {
	// 	let obj = tweetState;
	// 	var json = JSON.stringify(obj);
	// 	var fs = require('fs');
	// 	fs.writeFile('myjsonfile.json', json, 'utf8');
	// 	console.log(json);
	// }

	return (
		<>
			{
			tweetState.tweet !== null && tweetState.tweet !== undefined ? 
				(
					tweetState.tweet.map((each: Tweet) => 
						(
							<CardLayout
								cardId = {each.id}
								profilePic={each.profilePic}
								cardTitle={each.cardTitle}
								cardDate={each.cardDate}
								cardDescriptions={each.cardDescription}
								cardImage={each.cardImage}
								profileLink={each.profileLink}
								isLiked={each.isLiked}
							/>
						)
					)
				)
			 : <></>
			}
		</>
	)
}

export default CardContainer;