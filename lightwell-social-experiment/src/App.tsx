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
import "./App.module.scss";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/notifications" element={<NotificationPage />} />
				<Route path="/explore" element={<ExplorePage />} />
				<Route path="/messages" />
				<Route path="/bookmarks" />
				<Route path="/lists" />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/more" element={<Counter />} />
				<Route path="/signup" element={<RegistrationPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/replies/:id" element={<RepliesPage />} />
			</Routes>
		</div>
	);
}

export default App;
