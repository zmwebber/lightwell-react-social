import React from "react";
import NavBar from "../../components/NavbarComponent/NavBar";
import Profile from "../../components/ProfileComponent/Profile";
import TweetFeed from "../../components/TweetFeed/TweetFeed";
import TweetForm from "../../components/TweetFormComponent/TweetForm";
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
				<div id="center" className="profile-position">
					<Profile />
				</div>

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
