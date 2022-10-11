// import { createSlice } from "@reduxjs/toolkit";
// import { Tweet, TweetArray } from "../../models/TweetModel";
// import { tweetListInitialState } from "../ducks/tweetDuck/tweetInitialState";
// //import { defaultState } from "../ducks/tweetDuck/tweetReducer";

// // You HAVE to write an interface for this to be picked up by devTools...
// // https://stackoverflow.com/questions/65112542/redux-devtools-with-redux-toolkit-not-working
// interface DefaultStateI {
// 	loading: boolean;
// 	tweet: TweetArray;
// }

// const defaultState: DefaultStateI = {
// 	loading: false,
// 	tweet: tweetListInitialState(),
// };

// export const tweetSlice = createSlice({
// 	name: "tweets",

// 	initialState: tweetListInitialState(),
// 	reducers: {
// 		addTweet: (state, action) => {
// 			debugger;
// 			const newTweet: Tweet = {
// 				name: "",
// 				username: "",
// 				// date: ,
// 				tweetContent: action.payload,
// 			};
// 			//https://www.carlrippon.com/6-useful-typescript-3-features-you-need-to-know/
// 			state.tweetArray.push(newTweet);
// 		},
// 	},
// });

// export const { addTweet } = tweetSlice.actions;
// export default tweetSlice.reducer;

export {};
