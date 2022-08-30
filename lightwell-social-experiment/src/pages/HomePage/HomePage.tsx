import React from "react";
import NavBar from "../../components/NavbarComponent/NavBar";
import Profile from "../../components/ProfileComponent/Profile";
import YouMightLike from "../../components/YouMightLikeComponent/YouMightLike";

function HomePage() {
	return (
		<div>
			<YouMightLike />
			<Profile />
			{/* Card Component Goes Here */}

			<NavBar />
		</div>
	);
}

export default HomePage;
