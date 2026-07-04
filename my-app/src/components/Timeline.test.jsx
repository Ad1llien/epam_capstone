import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import Timeline from './Timeline'

vi.mock('../features/education/educationSlice', () => ({
    fetchEducations: () => ({ type: 'education/fetchEducations/noop' }),
}))

function renderWithStore(educationState) {
    const store = configureStore({
        reducer: {
            education: (state = educationState) => state,
        },
        preloadedState: { education: educationState },
    })
    return render(
        <Provider store={store}>
            <Timeline />
        </Provider>
    )
}

describe('Timeline', () => {
    it('shows a spinner while loading', () => {
        renderWithStore({ data: [], status: 'loading', error: null })
        expect(document.querySelector('.icon')).toBeInTheDocument()
    })

    it('shows the connection error message when the request fails', () => {
        renderWithStore({ data: [], status: 'failed', error: 'Network Error' })
        expect(
            screen.getByText('Something went wrong; please review your server connection!')
        ).toBeInTheDocument()
    })

    it('renders education entries once loaded', () => {
        const data = [{ date: '2022', title: 'Test title', description: 'Test description' }]
        renderWithStore({ data, status: 'succeeded', error: null })
        expect(screen.getByText('Test title')).toBeInTheDocument()
        expect(screen.getByText('Test description')).toBeInTheDocument()
    })
})
