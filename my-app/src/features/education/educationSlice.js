import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL } from '../../utils/constant'

export const fetchEducations = createAsyncThunk(
    'education/fetchEducations',
    async () => {
        const res = await axios.get(`${API_URL}/educations`)
        return res.data
    }
)

const educationSlice = createSlice({
    name: 'education',
    initialState: {
        data: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEducations.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchEducations.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(fetchEducations.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export default educationSlice.reducer