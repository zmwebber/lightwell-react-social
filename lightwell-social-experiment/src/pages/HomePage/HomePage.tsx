import React from "react";
import NavBar from "../../components/NavbarComponent/NavBar";
import Profile from "../../components/ProfileComponent/ProfileHeroComponent";
import TweetFeed from "../../components/FeedComponent/TweetFeed";
import TweetForm from "../../components/FormComponent/TweetForm";
import YouMightLike from "../../components/YouMightLikeComponent/YouMightLike";
import "./homePageStyle.css";

function HomePage() {
	return (
		<div className="home-page">
			<div id="left" className="navbar-position">
				<NavBar />
			</div>

			<div id="right" className="yml-position">
				<YouMightLike />
			</div>

			<div className="center">
				<div id="center" className="tweetForm-position">
					<TweetForm />
				</div>

				<div id="center" className="tweetFeed-position">
					<TweetFeed />
				</div>
			</div>

			{/* Card Component Goes Here */}
		</div>
	);
}

export default HomePage;
