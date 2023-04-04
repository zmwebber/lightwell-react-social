import { createAsyncThunk } from "@reduxjs/toolkit";
import { Tweet } from "../models/TweetModel";
import { Interaction } from "../models/InteractionsModel"
import API from "./apiConfig";

export const addNewInteraction = createAsyncThunk(
    "interaction/add", 
    async (interaction: Interaction) => {
    try {
        const response = await API.post("/interactions", interaction)
        return response.data
    } catch (error) {
        console.log(error)
    }
})

export const deleteInteraction = createAsyncThunk(
    "interaction/delete",
    async (id: any) => {
    try {
		console.log(`You are attempting to delete this interaction. ID: ${id}`);
        await API.delete(`/interactions/${id}`)
        console.log(`Deletion successful!`);
    } catch (error) {
        console.log(error);
    }
})