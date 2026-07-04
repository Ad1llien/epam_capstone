import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Info from './Info'

describe('Info', () => {
    it('renders every contact entry', () => {
        render(<Info />)
        expect(screen.getByText('Contact')).toBeInTheDocument()
        expect(screen.getByText('87058856886')).toBeInTheDocument()
        expect(screen.getByText('akadilzh2004kz@gmail.com')).toBeInTheDocument()
        expect(screen.getAllByText('@akxdil')).toHaveLength(2)
    })
})
