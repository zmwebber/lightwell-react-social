import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../models/ProfileModel";
import { RootState } from "../../../app/store";
import { IActionModel } from "../../../models/ActionModel";
import { getUserByScreenName } from "../../../api/UserApi";

export interface ProfileState {
  viewedProfile: User | undefined;
  isLoading: boolean;
  message: string;
  isError: boolean;
  isSuccess: boolean;
};

const initialState: ProfileState = {
  viewedProfile: undefined,
  isLoading: false,
  message: "",
  isError: false,
  isSuccess: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    toggleLoading: (state, action: IActionModel) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserByScreenName.fulfilled, (state, action: IActionModel) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.viewedProfile = action.payload
        state.message = "User found with given screen name!"
      })
      .addCase(getUserByScreenName.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false
      })
      .addCase(getUserByScreenName.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = "No user with given screen name exists!"
      })
      .addDefaultCase((state, action) => { })
  },
});
export const selectViewedProfile = (state: RootState) => state.viewedProfile;
export default profileSlice.reducer;