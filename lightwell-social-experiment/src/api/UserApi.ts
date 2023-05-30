import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';
import API from "./apiConfig";
import { Profile } from "../models/ProfileModel";
import { AxiosError } from "axios";
const API_URL = '/users/'

export const login = createAsyncThunk(
  "users/login",
  async (user: Profile, BaseThunk: any) => {
    try {
      let response = await API.post(API_URL + 'login', user)
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
    } catch (err: any) {
      let error: AxiosError = err;
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString()
      console.log(err);
      return BaseThunk.rejectWithValue(message)
    }
  })

export const addUser = createAsyncThunk(
  "users/add",
  async (user: Profile) => {
    try {
      const response = await API.post(API_URL + 'add', user)
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }
      return response.data
    } catch (err) {
      // let error: AxiosError = err;  
      //   const message =
      //     (err.response && err.response.data && err.response.data.message) ||
      //     err.message ||
      //     err.toString()
      //   return BaseThunk.rejectWithValue(message)
      console.log(err);
    }
  })

// Logout user
export const logout = createAsyncThunk(
  "users/logout",
  async () => {
    try {
      localStorage.removeItem('user')
      return null;
    } catch (err) {
      console.log(err);
    }
  })

const userService = {
  addUser,
  logout,
  login,
}

export default userService

