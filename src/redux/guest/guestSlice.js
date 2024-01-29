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
        updateGuest:(state)=>{
               
            }

    },
});

export const { setGuest, setError } = guestSlice.actions;
export default guestSlice.reducer;



