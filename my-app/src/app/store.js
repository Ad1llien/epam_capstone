import { configureStore } from "@reduxjs/toolkit";
import educationReducer from '../features/education/educationSlice'
import skillsReducer from '../features/skills/skillsSlice'

const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action)
    const state = store.getState()
    localStorage.setItem('skills', JSON.stringify(state.skills.data))
    return result
}

export const store = configureStore({
    reducer: {
        education: educationReducer,
        skills: skillsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware),
})