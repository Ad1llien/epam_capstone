import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Box from './Box'

describe('Box', () => {
    it('renders the About me heading and bio text', () => {
        render(<Box />)
        expect(screen.getByText('About me')).toBeInTheDocument()
        expect(screen.getByText(/фронтенд разработчик/)).toBeInTheDocument()
    })
})
