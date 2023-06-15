import { createAsyncThunk } from "@reduxjs/toolkit";
import { Tweet } from "../models/TweetModel";
import { Interaction } from "../models/InteractionModel"
import API from "./apiConfig";

export const addNewRetweetInteraction = createAsyncThunk(
    "retweets/add",
    async (interaction: Interaction) => {
        try {
            const response = await API.post("/retweets/", interaction)
            return response.data
        } catch (error) {
            console.log(error);
        }
    })

export const deleteRetweetInteraction = createAsyncThunk(
    "retweets/delete",
    async (interaction: Interaction) => {
        try {
            await API.delete(`/retweets/${interaction.tweetId}/${interaction.userId}`)
        } catch (error) {
            console.log(error);
        }
    })

export async function getRetweetInteractionsByTweetId(tweetId: any, userId: any) {

    let response = await API.get(`/retweets/byId/${tweetId}/${userId}`)
    return response.data

}