import { createAsyncThunk } from "@reduxjs/toolkit";
import { Tweet } from "../models/TweetModel";
import { Interaction } from "../models/InteractionsModel"
import API from "./apiConfig";

export const addNewFavoritedInteraction = createAsyncThunk(
    "favorites/add", 
    async (interaction: Interaction) => {
    try {
        const response = await API.post("/favorites/", interaction)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const deleteFavoritedInteraction = createAsyncThunk(
    "favorites/delete",
    async (interaction: Interaction) => {
    try {
		console.log(`You are attempting to delete this interaction. ID: ${interaction.tweetId}`);
        await API.delete(`/favorites/${interaction.tweetId}/${interaction.userId}`)
        console.log(`Deletion successful!`);
    } catch (error) {
        console.log(error);
    }
})