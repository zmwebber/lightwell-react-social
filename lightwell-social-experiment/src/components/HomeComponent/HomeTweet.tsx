import TweetBox from '../TweetComponents/TweetBox';
import './HomeTweet.css';


function HomeTweet() {
  /*
    Todo: Make DB call to create new tweet when DB is created
    Also figure out how to upload images or maybe get rid of the only import images all together for just url links.
  */

  return (
    <div className="homeTweet">
      <TweetBox />
    </div>
  )
}

export default HomeTweet