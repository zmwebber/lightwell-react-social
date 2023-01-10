import TweetFeed from "../../components/FeedComponent/TweetFeed";
import NavBar from "../../components/NavbarComponent/NavBar";
import Profile from "../../components/ProfileComponent/Profile";

export function ProfilePage() {
	// @TODO: Remove <Profile/> from HomePage.tsx

	return (
		<>
			<NavBar />
			<Profile />
			<TweetFeed />
		</>
	);
}
