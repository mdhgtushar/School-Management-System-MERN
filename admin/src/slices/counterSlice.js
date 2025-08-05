import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = { data: null, error: null, loading: false };
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
export const fetchData = createAsyncThunk('FETCH_DATA', async () => {
    const response = await fetch(`${API_BASE_URL}/api/admin/teacher`);
    const data = await response.json();
    return data;
});

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    },
})

export const counterSliceData = (state) => state.counter;


export default counterSlice.reducer