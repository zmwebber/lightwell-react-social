import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../../components/NavbarComponent/NavBar";
import "../../components/NavbarComponent/navBarStyle.css";
import Profile from "../../components/ProfileComponent/Profile";
import "../../components/ProfileComponent/profileStyle.css";
import YouMightLike from "../../components/YouMightLikeComponent/YouMightLike";
import "../../components/YouMightLikeComponent/youMightLikeCard.css";
import "./App.css";
//import Notifications  from "./NotificationPage/Notifications";
import Bookmarks from "../../components/BookmarksPage/Bookmarks";
import Explore from "../../components/ExplorePage/Explore";
import Home from "../../components/HomeComponent/Home";
import Lists from "../../components/ListsPage/Lists";
import Message from "../../components/MessagesPage/Message";
import More from "../../components/MorePage/More";
import { NotificationPage } from "../Notifications/NotificationPage";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<YouMightLike />
				<NavBar />
				<Routes>
					<Route path="/notifications" element={<NotificationPage />} />
					<Route path="/" element={<Home />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="/messages" element={<Message />} />
					<Route path="/bookmarks" element={<Bookmarks />} />
					<Route path="/lists" element={<Lists />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/more" element={<More />} />
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
