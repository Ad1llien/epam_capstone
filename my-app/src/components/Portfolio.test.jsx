import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Portfolio from './Portfolio'

describe('Portfolio', () => {
    it('renders all cards by default', () => {
        render(<Portfolio />)
        expect(screen.getByText('YouChef')).toBeInTheDocument()
        expect(screen.getByText('Epam CV')).toBeInTheDocument()
    })

    it('filters cards by category', async () => {
        const user = userEvent.setup()
        render(<Portfolio />)
        await user.click(screen.getByText('ui'))
        expect(screen.getByText('Epam CV')).toBeInTheDocument()
        expect(screen.queryByText('YouChef')).not.toBeInTheDocument()
    })
})
