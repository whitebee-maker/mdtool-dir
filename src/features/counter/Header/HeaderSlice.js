import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import counterSlice from '../counterSlice';

const initialState = {
    value: ""
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        selectFilePath: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { selectFilePath } = headerSlice.actions;

export const selectInputPath = state.header.value;

export default counterSlice.reducers;