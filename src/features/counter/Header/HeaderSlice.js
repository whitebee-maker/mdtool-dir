import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import counterSlice from '../counterSlice';

const initialState = {
    value: ""
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {

    }
});

export const {} = headerSlice.actions;

export default counterSlice.reducers;