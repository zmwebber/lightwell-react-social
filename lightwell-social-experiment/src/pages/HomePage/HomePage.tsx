import React from "react";
import TweetFeed from "../../components/FeedComponent/TweetFeed";
import TweetForm from "../../components/FormComponent/TweetForm";
import HomePageStyle from "./homePageStyle.module.scss";

function HomePage() {
	return (
		<div className={HomePageStyle.homepageContainer}>
			<div className={HomePageStyle.centerContent}>

				<div className={HomePageStyle.tweetForm}>
					<TweetForm />
				</div>

				<div className={HomePageStyle.tweedFeed}>
					<TweetFeed />
				</div>

			</div>
		</div>
	);
}

export default HomePage;
