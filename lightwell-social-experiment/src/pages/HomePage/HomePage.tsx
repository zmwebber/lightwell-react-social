import React from "react";
import NavBar from "../../components/NavbarComponent/NavBar";
import Profile from "../../components/ProfileHeroComponent/ProfileHeroComponent";
import TweetFeed from "../../components/FeedComponent/TweetFeed";
import TweetForm from "../../components/FormComponent/TweetForm";
import YouMightLike from "../../components/YouMightLikeComponent/YouMightLike";
import HomePageStyle from "./homePageStyle.module.scss";

function HomePage() {
	return (
		<div className={HomePageStyle.homepageContainer}>
			{/* <div className={HomePageStyle.navbar}>
				<NavBar />
			</div>

			<div className={HomePageStyle.youMightLike}>
				<YouMightLike />
			</div> */}

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
