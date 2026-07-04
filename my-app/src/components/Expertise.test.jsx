import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Expertise from './Expertise'

describe('Expertise', () => {
    it('renders every experience entry', () => {
        render(<Expertise />)
        expect(screen.getByText('Experience')).toBeInTheDocument()
        expect(screen.getByText('Dostyq')).toBeInTheDocument()
        expect(screen.getByText('Softmax')).toBeInTheDocument()
        expect(screen.getByText('EPAM')).toBeInTheDocument()
    })
})
