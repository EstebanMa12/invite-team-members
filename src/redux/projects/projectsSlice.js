import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projects: [],
    error: null
}

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        setProjects: (state, action) => {
            state.projects = action.payload;
        },
        addProjects: (state, action) =>{
            state.projects.push(action.payload);
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        updateProjects: (state, action) => {
            state.projects = state.projects.map((project)=> project.id === action.payload.id ? {...action.payload} : project)
        },
        deleteProjects: (state, action) => {
            state.projects = state.projects.filter((project)=> project.id !== action.payload.id)
        },
    },
});

export const { 
    setProjects, 
    addProjects,
    setError,
    updateProjects,
    deleteProjects} = projectsSlice.actions;
export default projectsSlice.reducer;