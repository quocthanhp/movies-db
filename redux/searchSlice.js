import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: ""
    },
    reducers: {
        addQuery: (state, action) => {
            state.query = action.payload
        },
    },
});

export const { addQuery } = searchSlice.actions;
export default searchSlice.reducer;