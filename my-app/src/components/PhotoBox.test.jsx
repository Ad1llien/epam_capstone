import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PhotoBox from './PhotoBox'

describe('PhotoBox', () => {
    it('renders the name label', () => {
        render(
            <MemoryRouter>
                <PhotoBox />
            </MemoryRouter>
        )
        expect(screen.getByText('Akadil Zhengissuly')).toBeInTheDocument()
    })
})
