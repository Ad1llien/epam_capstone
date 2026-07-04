import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import Navigation from './Navigation'

describe('Navigation', () => {
    it('renders every nav item and label when open', () => {
        render(
            <MemoryRouter>
                <Navigation isOpen={true} />
            </MemoryRouter>
        )
        expect(screen.getByText('Education')).toBeInTheDocument()
        expect(screen.getByText('Skills')).toBeInTheDocument()
        expect(screen.getByText('Go Back')).toBeInTheDocument()
    })

    it('hides labels and the Go Back link when collapsed', () => {
        render(
            <MemoryRouter>
                <Navigation isOpen={false} />
            </MemoryRouter>
        )
        expect(screen.queryByText('Education')).not.toBeInTheDocument()
        expect(screen.queryByText('Go Back')).not.toBeInTheDocument()
    })

    it('marks a section active on click', async () => {
        const user = userEvent.setup()
        render(
            <MemoryRouter>
                <Navigation isOpen={true} />
            </MemoryRouter>
        )
        await user.click(screen.getByText('Skills'))
        expect(screen.getByText('Skills')).toBeInTheDocument()
    })
})
