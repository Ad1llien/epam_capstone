import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_URL } from '../../utils/constant'

const loadFromStorage = () => {
    try {
        const raw = localStorage.getItem('skills')
        const parsed = raw ? JSON.parse(raw) : []
        return Array.isArray(parsed) ? parsed : []
    } catch {
        return []
    }
}

export const fetchSkills = createAsyncThunk(
    'skills/fetchSkills',
    async () => {
        const res = await axios.get(`${API_URL}/skills`)
        return res.data
    }
)

export const addSkill = createAsyncThunk(
    'skills/addSkill',
    async (skill) => {
        const res = await axios.post(`${API_URL}/skills`, skill, { withCredentials: true })
        return res.data
    }
)

const skillsSlice = createSlice({
    name: 'skills',
    initialState: {
        data: loadFromStorage(),
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSkills.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchSkills.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data = action.payload
            })
            .addCase(fetchSkills.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(addSkill.fulfilled, (state, action) => {
                state.data.push(action.payload)
            })
    },
})

export default skillsSlice.reducer