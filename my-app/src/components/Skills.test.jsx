import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import Skills, { validateSkillForm } from './Skills'

vi.mock('../features/skills/skillsSlice', () => ({
    fetchSkills: () => ({ type: 'skills/fetchSkills/noop' }),
    addSkill: (payload) => ({ type: 'skills/addSkill/noop', payload }),
}))

const OWNER = { email: 'akadilzh2004kz@gmail.com' }
const GUEST = { email: 'guest@example.com' }

function renderWithStore(skillsState, user) {
    const store = configureStore({
        reducer: {
            skills: (state = skillsState) => state,
        },
        preloadedState: { skills: skillsState },
    })
    return render(
        <Provider store={store}>
            <Skills user={user} />
        </Provider>
    )
}

describe('validateSkillForm', () => {
    it('requires a name', () => {
        expect(validateSkillForm({ name: '', range: '50' }).name).toBe('Skill name is a required field')
    })

    it('requires a range', () => {
        expect(validateSkillForm({ name: 'Vue', range: '' }).range).toBe('Skill range is a required field')
    })

    it('rejects a non-numeric range', () => {
        expect(validateSkillForm({ name: 'Vue', range: 'abc' }).range).toBe("Skill range must be a 'number' type")
    })

    it('rejects a range below 10', () => {
        expect(validateSkillForm({ name: 'Vue', range: '5' }).range).toBe('Skill range must be greater than or equal to 10')
    })

    it('rejects a range above 100', () => {
        expect(validateSkillForm({ name: 'Vue', range: '150' }).range).toBe('Skill range must be less than or equal to 100')
    })

    it('accepts a valid name and range', () => {
        expect(validateSkillForm({ name: 'Vue', range: '50' })).toEqual({})
    })
})

describe('Skills component', () => {
    it('renders skill bars from the store', () => {
        renderWithStore({ data: [{ name: 'React', range: 80 }], status: 'succeeded', error: null }, null)
        expect(screen.getByText('React')).toBeInTheDocument()
    })

    it('shows the Open Edit button only to the owner', () => {
        renderWithStore({ data: [], status: 'idle', error: null }, OWNER)
        expect(screen.getByText('Open Edit')).toBeInTheDocument()
    })

    it('hides the Open Edit button from guests', () => {
        renderWithStore({ data: [], status: 'idle', error: null }, GUEST)
        expect(screen.queryByText('Open Edit')).not.toBeInTheDocument()
    })

    it('disables the submit button until the form is valid', async () => {
        const user = userEvent.setup()
        renderWithStore({ data: [], status: 'idle', error: null }, OWNER)
        await user.click(screen.getByText('Open Edit'))
        expect(screen.getByText('Add skill')).toBeDisabled()
    })

    it('shows a validation error after touching an empty name field', async () => {
        const user = userEvent.setup()
        renderWithStore({ data: [], status: 'idle', error: null }, OWNER)
        await user.click(screen.getByText('Open Edit'))
        await user.click(screen.getByLabelText('Skill name:'))
        await user.tab()
        expect(await screen.findByText('Skill name is a required field')).toBeInTheDocument()
    })

    it('enables the submit button once name and range are valid', async () => {
        const user = userEvent.setup()
        renderWithStore({ data: [], status: 'idle', error: null }, OWNER)
        await user.click(screen.getByText('Open Edit'))
        await user.type(screen.getByLabelText('Skill name:'), 'Vue')
        await user.type(screen.getByLabelText('Skill range:'), '50')
        await user.tab()
        expect(await screen.findByText('Add skill')).not.toBeDisabled()
    })
})
