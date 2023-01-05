import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "./apiConfig";
import  { Tweet }  from "../models/TweetModel";

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
		console.log(`You are attempting to delete this tweet. ID: ${id}`);
        await API.delete(`/tweets/${id}`);
        console.log(`Deletion successful!`);
    } catch (error) {
        console.log(error);
    }
})

export const updateTweet = createAsyncThunk(
    "tweets/put",
    async (tweet: any) => {
        const id = tweet._id;
        try {
            console.log(`You are attempting to update this tweet. ID: ${id}`)  
            await API.put(`/tweets/${id}`, tweet);
            console.log(`Updated completed!`);
        } catch (error) {
            console.log(error);
        }
    }
)