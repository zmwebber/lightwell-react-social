import React from "react";
import NavBar from "../../components/NavbarComponent/NavBar";
import Profile from "../../components/ProfileComponent/Profile";
import YouMightLike from "../../components/YouMightLikeComponent/YouMightLike";
import "./homePageStyle.css";

function HomePage() {
	return (
		<div className="home-page">
			<div className="navbar-position" id="component">
				<NavBar />
			</div>

			<div className="profile-position" id="component">
				<Profile />
			</div>

			<div className="yml-position" id="component">
				<YouMightLike />
			</div>

			{/* Card Component Goes Here */}
		</div>
	);
}

export default HomePage;
