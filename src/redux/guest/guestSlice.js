import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    guest: null,
    error: null
}

const guestSlice =createSlice({
    name: "guest",
    initialState,
    reducers: {
        setGuest: (state, action) => {
            state.guest = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        addProjectToUser: (state, action) => {
            state.guest.projects.push(action.payload)
        },
        deleteProjectFromUser: (state, action) => {
            state.guest.projects = state.guest.projects.filter(project => project.id !== action.payload)
        },
        updateProjectFromUser: (state, action) => {
            state.guest.projects = state.guest.projects.map(project => project.id === action.payload.id ? action.payload : project)
        },
        setUserProjects: (state, action) => {
            state.guest.projects = action.payload
        },
    },
});

export const { 
    setGuest, 
    setError,
    addProjectToUser,
    deleteProjectFromUser,
    updateProjectFromUser,
    setUserProjects
    } = guestSlice.actions;
export default guestSlice.reducer;



