import {
  createAsyncThunk,
} from '@reduxjs/toolkit';
import API from "./apiConfig";
import { Profile, User } from "../models/ProfileModel";
import { AxiosError } from "axios";
const API_URL = '/users/'

// TODO
// 2 methods - editUserTheme. Make copy of user, modify so it just takes id + theme. Hits updateTheme endpoint.
//

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
      //   const message =
      //     (err.response && err.response.data && err.response.data.message) ||
      //     err.message ||
      //     err.toString()
      //   return BaseThunk.rejectWithValue(message)
      console.log(err);
    }
  })

export const getUser = createAsyncThunk(
  "users/getById",
  async (id: any) => {
    try {
      const response = await API.get(API_URL + 'getById/' + id, id)
      return response.data
    } catch (err) {
      throw err
    }
  }
)

export const getUserByScreenName = createAsyncThunk(
  "users/getUserByScreenName",
  async (screen_name: any) => {
    try {
      const response = await API.get(API_URL + `getUserByScreenName/${ screen_name }`)
      return response.data.user
    } catch (err) {
      throw err
    }
  }
)

export const editUser = createAsyncThunk(
  "users/edit",
  async (user: Profile) => {
    try {
      const response = await API.post(API_URL + 'edit', user)
      if (response.data) {
        console.log("Edit user returned: " + JSON.stringify(response.data))
        localStorage.setItem('user', JSON.stringify(response.data.name))
      }
      return response.data.name
    } catch (err) {
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

export const editUserTheme = createAsyncThunk(
  "users/theme",
  async (user: User) => {
    try {
      let body = { 'id': user._id, 'theme': user.theme }
      const response = await API.post(API_URL + 'editTheme', body)
      if (response.data) {

        // TODO: cookie manipulation in localStorage

        // var item: any = JSON.stringify(localStorage.getItem('user'))
        // item['theme'] = JSON.stringify(response.data.theme)
        // localStorage.setItem('user', item)
      }
      return response.data.theme
    } catch (err) {
      throw err
    }
  }
)

const userService = {
  addUser,
  logout,
  login,
}

export default userService

