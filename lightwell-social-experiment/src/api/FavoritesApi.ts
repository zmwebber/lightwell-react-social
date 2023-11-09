import { createAsyncThunk } from "@reduxjs/toolkit";
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
            // @TODO: interaction.tweetId is not being passed
            await API.delete(`/favorites/${interaction.tweetId}/${interaction.userId}`)
        } catch (error) {
            console.log(error);
        }
    })

export async function getFavoritedInteractionsByTweetId(tweetId: any, userId: any) {

    let response = await API.get(`/favorites/byId/${tweetId}/${userId}`)
    return response.data

}