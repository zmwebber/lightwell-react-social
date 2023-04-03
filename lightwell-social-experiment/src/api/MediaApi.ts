import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "./apiConfig";
import  { Media }  from "../models/MediaModel";

export const getMedia = createAsyncThunk(
    "media/get", 
    async (media?: Media[]) => {
    try {
        let response = await API.get("/media");
        media = response.data.tweets;
        return media
    } catch (error) {
        console.log(error)
    }
})