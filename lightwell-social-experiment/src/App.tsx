import React from "react";
import "./App.css";
import "./components/NavbarComponent/navBarStyle.css";
import "./components/YouMightLikeComponent/youMightLikeCard.css";
import YouMightLike from "./components/YouMightLikeComponent/YouMightLike";
import NavBar from "./components/NavbarComponent/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div>
			<YouMightLike />
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" />
					<Route path="/explore" />
					<Route path="/notifications" />
					<Route path="/messages" />
					<Route path="/bookmarks" />
					<Route path="/lists" />
					<Route path="/profile" />
					<Route path="/more" />
				</Routes>
			</Router>
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
