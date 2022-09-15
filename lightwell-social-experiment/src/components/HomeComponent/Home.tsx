import CardFeed from '../CardFeed/CardFeed';
import "./Home.css";
import HomeTweet from './HomeTweet';

// Todo: Fix stlying on homeHeader to not shrink the box on scroll down.

const Home = () => {
  return (
    <div className="homePage">
      <h2 className="homeHeader">Home</h2>
      <HomeTweet />
      <CardFeed />
    </div>
  )
}

export default Home
