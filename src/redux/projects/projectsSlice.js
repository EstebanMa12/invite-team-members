import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    createAt: null,
}

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setCreateAt: (state, action) => {
            state.createAt = action.payload;
        },
    },
});

export const { setName, setCreateAt } = projectsSlice.actions;
export default projectsSlice.reducer;