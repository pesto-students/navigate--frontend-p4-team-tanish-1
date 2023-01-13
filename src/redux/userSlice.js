import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStudent } from "../API.js";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        isAuthenticated: false,
        access: "",
        userData: {},
        firebaseID: "",
        error: ""
    },
    reducers: {
        USER_LOGIN: (state, action) => {
            state.isAuthenticated = true;
            state.userData = action.payload.userData;
            state.firebaseID = action.payload.firebaseID
            state.access = action.payload.token;
        },
        USER_LOGOUT: (state) => {
            state.isAuthenticated = false;
            state.access = "";
            state.userData = {};
            state.firebaseID = "";
        },
        UPDATE_USER_PROFILE: (state, action) => {
            state.userData = action.payload.userData;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserData.fulfilled, (state, action)=>{
            state.userData = action.payload['data']
            state.error = ''
        })
        builder.addCase(fetchUserData.rejected, (state, action) => {
            state.error = action.error.message
            state.userData = []
        })
    }
})

export const fetchUserData = createAsyncThunk('user/fetchUserData', (userID) => {
    return getStudent(userID)
})

export const {USER_LOGIN, USER_LOGOUT, UPDATE_USER_PROFILE } = userSlice.actions;
export default userSlice.reducer;