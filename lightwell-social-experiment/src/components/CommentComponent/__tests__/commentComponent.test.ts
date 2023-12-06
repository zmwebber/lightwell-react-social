import commentCard from '../Comment';

test('should return tweetId', () => {
  const sampleTweet = { tweetId: '123' }
  expect(commentCard(sampleTweet)).toEqual('123');
})