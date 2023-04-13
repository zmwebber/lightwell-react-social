import API from "./apiConfig";
import  { Media }  from "../models/MediaModel";

const API_URL = '/media';

export async function getMedia() {
    let response = await API.get(API_URL);

    return response;
}

export async function addMedia(media: any) {
    console.log(media);

    // let response = await API.post(API_URL, media);
    // return response.data;
}