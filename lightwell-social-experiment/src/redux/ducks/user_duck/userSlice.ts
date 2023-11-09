
import { createSlice } from '@reduxjs/toolkit'
import { addUser, editUser, editUserTheme, getUser, getUserByScreenName, login, logout } from '../../../api/UserApi'
import { User } from '../../../models/ProfileModel'
// Get user from localStorage

let localUser = localStorage.getItem('user');
let user = null;
if (localUser !== '' && localUser !== null) {
  user = JSON.parse(localUser) as User;
}
else {
  user = new User();
}

export interface UserState {
  profile: User | null | undefined,
  isError: boolean,
  isSuccess: boolean,
  isLoading: boolean,
  message: string,
  loginSuccess: boolean
}

const initialState = {
  profile: user,
  isError: user._id ? false : true,
  isSuccess: user._id ? true : false,
  isLoading: false,
  message: user._id ? "Successfully logged in." : '',
  loginSuccess: user._id ? true: false,
}



export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = initialState.isLoading
      state.isSuccess = initialState.isSuccess
      state.isError = initialState.isError
      state.message = initialState.message
      state.loginSuccess = initialState.loginSuccess
      state.profile = initialState.profile
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
        state.loginSuccess = true
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = "Failed to save user!"
        state.profile = initialState.profile
        state.loginSuccess = false
      })
      .addCase(editUser.pending, (state) => {
        state.isLoading = true        
        state.loginSuccess = true
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.profile = action.payload
        state.loginSuccess = true
      })
      .addCase(editUser.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = "Failed to save user!"
        state.profile = initialState.profile
        state.loginSuccess = false
      })
      .addCase(login.pending, (state) => {
        state.loginSuccess = false
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.profile = action.payload 
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
        state.profile = initialState.profile
      })
      .addCase(logout.pending, (state) => {
        state.loginSuccess = false
        state.isLoading = true
      })
      .addCase(logout.fulfilled, (state) => {
        state.profile = initialState.profile
        state.loginSuccess = false
        state.isLoading = false
        state.isError = false
        state.message = "Successfully logged out."
        state.isSuccess = true
      })
      .addCase(editUserTheme.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = "Failed to save user theme!"
        state.profile = initialState.profile
        state.loginSuccess = false
      })
      .addCase(editUserTheme.pending, (state, action) => {
        state.isLoading = true
        state.loginSuccess = true
      })
      .addCase(editUserTheme.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.loginSuccess = true
        state.profile.theme = action.payload
      })
      .addCase(getUser.pending, (state, action) => {
        state.isLoading = true
        state.isSuccess = false
        state.isError = false
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.profile = action.payload
        state.message = "Get user accepted"
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = "Get user rejected"
      })
  },
})

export const { reset } = authSlice.actions;

export default authSlice.reducer
