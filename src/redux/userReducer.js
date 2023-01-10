import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        isAuthenticated: false,
        userID: "",
        access: ""
    },
    reducers: {
        USER_LOGIN: (state, action) => {
            state.isAuthenticated = true;
            state.fullName = action.payload.fullName;
            state.headline = action.payload.headline;
            state.userID = action.payload.userID;
            state.access = action.payload.token;
        },
        USER_LOGOUT: (state) => {
            state.isAuthenticated = false;
            state.userID = "";
            state.access = "";
        }
    }
})

export const {USER_LOGIN, USER_LOGOUT} = userSlice.actions;
export default userSlice.reducer;