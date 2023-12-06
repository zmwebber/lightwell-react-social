// import { render, screen } from '@testing-library/react'
import IndividualTweetDisplay from '../IndividualTweetDisplay';
import { Tweet } from '../../../../models/TweetModel';
import * as React from 'react';
import { render, screen } from '../../../../../test-utils';
import '@testing-library/jest-dom'

test('should display correct tweet information', () => {
  const dateConverted = new Date(1677525931811)
  const dummyData: Tweet = {
    "_id":
      "63fd03abe07bb74ae86e29d3"
    ,
    "createdAt": dateConverted,
    "user": {
      "_id": "63f7c8eb29fb3c065d2bc0a2",
      "name": "Z Webber",
      "screen_name": "zwebber"
    },
    "text": "What's up twitterverse?",
    "source": "Twitter Clone Web App",
    "truncated": false,
    "is_reply_status": false,
    "in_reply_to_status_id": "",
    "in_reply_to_user_id": "",
    "reply_count": 0,
    "is_quote_status": false,
    "quoted_status_id": "",
    "is_retweeted_status": false,
    "retweet_count": 0,
    "favorite_count": 1,
    "favorited": true,
    "links": {
      "indicies": [
        0
      ],
      "url": "",
      "text": ""
    },
    "hashtags": {
      "indicies": [0],
      "text": ""
    },
  };

  
  describe('Testing IndividualTweetDisplay', () => {
    it('renders correct component', async () => {
      render(<IndividualTweetDisplay {...dummyData} />);
      expect(await screen.findByText('twitterverse')).toBeVisible()
  });
  });
  
  // render(IndividualTweetDisplay(dummyData))
  // const element = screen.getByText("What's up")
  // expect(element).toBeInTheDocument();
})