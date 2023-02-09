import { LensTwoTone } from '@mui/icons-material';
import { useRadioGroup } from '@mui/material';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService, { addUser, login, logout } from '../../../api/UserApi'
import { Profile } from '../../../models/ProfileModel'
// Get user from localStorage

let localUser = localStorage.getItem('user');
let user = null;
if (localUser !== '' && localUser !== null) {
  user = JSON.parse(localUser) as Profile;
}
else {
  user = undefined;
}


export interface UserState {
  profile: Profile | null | undefined,
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  message: string,
  loginSuccess: boolean
}

const initialState = {
  profile: user,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  loginSuccess: false
}



export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
      state.loginSuccess = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.isLoading = true
        state.loginSuccess = false
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.profile = action.payload
        state.loginSuccess = false
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = "Failed to save user!"
        state.profile = undefined
        state.loginSuccess = false
      })
      .addCase(login.pending, (state) => {
        state.loginSuccess = false
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.profile = action.payload ? action.payload : undefined
        state.loginSuccess = true
        state.isLoading = false
        state.isError = false
        state.message = "Successfully logged in."
        state.isSuccess = true
      })
      .addCase(login.rejected, (state, action) => {
        state.loginSuccess = false
        state.isLoading = false
        state.isError = true
        state.message = "Failed to login!"
        state.isSuccess = false
        state.profile = undefined
      })
      .addCase(logout.pending, (state) => {
        state.loginSuccess = false
        state.isLoading = true
      })
      .addCase(logout.fulfilled, (state) => {
        state.profile = undefined
        state.loginSuccess = false
        state.isLoading = false
        state.isError = false
        state.message = "Successfully logged out."
        state.isSuccess = true
      })
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer