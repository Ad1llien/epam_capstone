import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Panel from './Panel'

describe('Panel', () => {
    it('renders the profile photo and navigation items when open', () => {
        render(
            <MemoryRouter>
                <Panel />
            </MemoryRouter>
        )
        expect(screen.getByText('Akadil Zhengissuly')).toBeInTheDocument()
        expect(screen.getByText('About me')).toBeInTheDocument()
    })
})
