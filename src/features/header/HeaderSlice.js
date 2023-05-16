import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: ""
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        decidedFilePath: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { decidedFilePath } = headerSlice.actions;

export const selectInputPath = (state) => state.header.value;

export default headerSlice.reducer;