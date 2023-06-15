import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "./apiConfig";
import  { Tweet }  from "../models/TweetModel";
import {User} from "../models/ProfileModel"

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
        await API.delete(`/tweets/byId/${id}`);
        console.log(`Deletion successful!`);
    } catch (error) {
        console.log(error);
    }
})

export const updateTweet = createAsyncThunk(
    "tweets/update",
    async (tweet: any) => {
        const id = tweet._id;
        try {
            await API.put(`/tweets/byId/${id}`, tweet);
            console.log(`Update completed!`);
        } catch (error) {
            console.log(error);
        }
    }
)

export const getProfileFeed = createAsyncThunk(
    "tweets/getByUser", 
    async (profile: User) => {
    try {
        let response = await API.get('/tweets/byUser/',  { params: { userId: profile._id }});
        const tweets:Tweet[] = response.data.tweets;
        return tweets
    } catch (error) {
        console.log(error)
    }
})