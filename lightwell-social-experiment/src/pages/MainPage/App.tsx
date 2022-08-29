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

function App() {
	return (
		<div>
			<BrowserRouter>
				<YouMightLike />
				<Profile />
				<NavBar />
				<Routes>
					<Route path="/notifications" element={<NotificationPage />} />
					<Route path="/" />
					<Route path="/explore" />
					<Route path="/messages" />
					<Route path="/bookmarks" />
					<Route path="/lists" />
					<Route path="/profile" />
					<Route path="/more" />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

// {
// 	/* <BrowserRouter>
// 	<Navbar />
// 	<div className="container">
// 		<Routes>
// 			<Route path="/catfact" element={<CatFactComponent />} />
// 			<Route path="/weather" element={<WeatherComponent />} />
// 			<Route path="/" element={<Counter />} />
// 		</Routes>
// 	</div>
// </BrowserRouter>; */
// }

export default App;
