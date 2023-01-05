import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState:{
        isAuthenticated: false,
        userID: ""
    },
    reducers: {
        USER_LOGIN: (state, action) => {
            state.isAuthenticated = true;
            state.userID = action.payload.userID;
        },
        USER_LOGOUT: (state) => {
            state.isAuthenticated = false;
            state.userID = ""
        }
    }
})

export const {USER_LOGIN, USER_LOGOUT} = userSlice.actions;
export default userSlice.reducer;