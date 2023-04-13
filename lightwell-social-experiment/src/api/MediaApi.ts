import API from "./apiConfig";
import  { Media }  from "../models/MediaModel";

const API_URL = '/media';

export async function getMedia() {
    let response = await API.get(API_URL);
    console.log(response);

    return response;
}