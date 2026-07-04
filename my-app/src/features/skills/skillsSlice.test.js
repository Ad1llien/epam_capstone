import { describe, it, expect } from 'vitest'
import reducer, { fetchSkills, addSkill } from './skillsSlice'

describe('skillsSlice', () => {
    const initialState = { data: [], status: 'idle', error: null }

    it('returns the initial state', () => {
        expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
    })

    it('sets status to loading on pending', () => {
        const state = reducer(initialState, { type: fetchSkills.pending.type })
        expect(state.status).toBe('loading')
    })

    it('stores the payload and marks succeeded on fulfilled', () => {
        const payload = [{ name: 'React', range: 80 }]
        const state = reducer(initialState, { type: fetchSkills.fulfilled.type, payload })
        expect(state.status).toBe('succeeded')
        expect(state.data).toEqual(payload)
    })

    it('stores the error message and marks failed on rejected', () => {
        const state = reducer(initialState, {
            type: fetchSkills.rejected.type,
            error: { message: 'Network Error' },
        })
        expect(state.status).toBe('failed')
        expect(state.error).toBe('Network Error')
    })

    it('appends the new skill on addSkill.fulfilled', () => {
        const payload = { name: 'Vue', range: 50 }
        const state = reducer(initialState, { type: addSkill.fulfilled.type, payload })
        expect(state.data).toEqual([payload])
    })
})
