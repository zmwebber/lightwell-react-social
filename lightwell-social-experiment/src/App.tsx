import React from "react";
import logo from "./logo.svg";
import { Counter } from "./components/CounterComponent/Counter";
import { Routes, Route } from "react-router-dom";
import { NotificationPage } from "./pages/Notifications/NotificationPage";
import HomePage from "./pages/HomePage/HomePage";
import { ExplorePage } from "./pages/ExplorePage/ExplorePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { RepliesPage } from "./pages/RepliesPage/RepliesPage";
import RegistrationPage from "./pages/AuthenticationPage/RegistrationPage";
import AppStyle from "./App.module.scss";
import YouMightLike from "./components/YouMightLikeComponent/YouMightLike";
import { Outlet } from 'react-router-dom';
import NavBar from "./components/NavbarComponent/NavBar";
import { Grid } from "@mui/material";

function App() {
	return (
		// <div>
		// 	<Routes>
		// 		<Route path="/" element={<HomePage />} />
		// 		<Route path="/notifications" element={<NotificationPage />} />
		// 		<Route path="/explore" element={<ExplorePage />} />
		// 		<Route path="/messages" />
		// 		<Route path="/bookmarks" />
		// 		<Route path="/lists" />
		// 		<Route path="/profile" element={<ProfilePage />} />
		// 		<Route path="/more" element={<Counter />} />
		// 		<Route path="/signup" element={<RegistrationPage />} />
		// 		<Route path="/login" element={<LoginPage />} />
		// 		<Route path="/replies/:id" element={<RepliesPage />} />
		// 	</Routes>
		// </div>

		// <div className={AppStyle.App}>
		// 	<div className={AppStyle.navBarLeft}>
		// 		<NavBar />
		// 	</div>

		// 	<div className={AppStyle.middle}>
		// 		<Outlet />
		// 	</div>

		// 	<div className={AppStyle.ymlRight}>
		// 		<YouMightLike />
		// 	</div>
		// </div>

		<div className="defaultLayout">
			<Grid container spacing={1.5}>
				<Grid item xs={0} sm={1.5}>
					<NavBar />
				</Grid>

				<Grid item xs={12} sm={7.5}>
					<Outlet />
				</Grid>

				<Grid item xs={0} sm={3}>
					<YouMightLike />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
