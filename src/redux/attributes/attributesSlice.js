import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    role: null,
    projects: [],
    permission: null,
}

const attributesSlice =createSlice({
    name: "attributes",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
        setProjects: (state, action) => {
            state.projects = action.payload;
        },
        setPermission: (state, action) => {
            state.permission = action.payload;
        },
    },
});
export const {setUser, setRole, setProjects, setPermission}= attributesSlice.actions;
export default attributesSlice.reducer;

