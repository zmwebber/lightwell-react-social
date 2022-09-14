import React from 'react'
import CardFeed from '../CardFeed/CardFeed'
import "./Home.css";
import HomeTweet from './HomeTweet';

const Home = () => {
  return (
    <div className="homePage">
        <h2 className="homeHeader">Home</h2>
        <HomeTweet/>
        <CardFeed/>
    </div>
  )
}

export default Home
