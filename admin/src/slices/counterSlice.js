import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = { data: null, error: null, loading: false };
export const fetchData = createAsyncThunk('FETCH_DATA', async () => {
    const response = await fetch('http://localhost:5000/api/admin/teacher');
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