import React from "react";
import "./App.css";
import "../../components/NavbarComponent/navBarStyle.css";
import "../../components/YouMightLikeComponent/youMightLikeCard.css";
import YouMightLike from "../../components/YouMightLikeComponent/YouMightLike";
import NavBar from "../../components/NavbarComponent/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "../../components/ProfileComponent/Profile";
import "../../components/ProfileComponent/profileStyle.css";
//import Notifications  from "./NotificationPage/Notifications";
import { NotificationPage } from "../Notifications/NotificationPage";
import HomePage from "../HomePage/HomePage";
import { ExplorePage } from "../ExplorePage/ExplorePage";

function App() {
	return (
		<div>
			{/* <YouMightLike />
			<Profile />
			Card Component Goes Here */}

			<Routes>
				<Route path="/notifications" element={<NotificationPage />} />
				<Route path="/" element={<HomePage />} />
				<Route path="/explore" element={<ExplorePage />} />
				<Route path="/messages" />
				<Route path="/bookmarks" />
				<Route path="/lists" />
				<Route path="/profile" />
				<Route path="/more" />
			</Routes>
		</div>
	);
}

export default App;
