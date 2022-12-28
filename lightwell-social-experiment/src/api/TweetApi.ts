import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "./apiConfig";
import  {Tweet}  from "../models/TweetModel";
import { store } from "../app/store";

export const getFeed = createAsyncThunk(
    "tweets/get", 
    async (tweets?: Tweet[]) => {
    try {
        let response = await API.get("/tweets");
        tweets = response.data.tweets;
        return tweets
    } catch (error) {
        console.log(error)
    }
})

export const addTweet = createAsyncThunk(
    "tweets/add", 
    async (tweet: Tweet) => {
    try {
        const response = await API.post("/tweets", tweet)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const deleteTweet = createAsyncThunk(
    "tweets/delete",
    async (id: String) => {
    try {
		console.log(`You are attempting to delete this: ${id}`);
        await API.delete(`/tweets/${id}`);
        console.log(`Deletion successful!`);
    } catch (error) {
        console.log(error);
    }
})