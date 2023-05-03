import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    viewRestaurants: [],
    allRestaurants: [],
    detail: {},
    error: ""
}

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState,
    reducers: {
        getAllRestaurants: (state, action) => {
            state.allRestaurants = action.payload;
            state.viewRestaurants = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload
        }

    }
})

export const {getAllRestaurants, setError} = restaurantsSlice.actions

export default restaurantsSlice.reducer