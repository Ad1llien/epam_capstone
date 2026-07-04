import { describe, it, expect } from 'vitest'
import reducer, { fetchEducations } from './educationSlice'

describe('educationSlice', () => {
    const initialState = { data: [], status: 'idle', error: null }

    it('returns the initial state', () => {
        expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
    })

    it('sets status to loading on pending', () => {
        const state = reducer(initialState, { type: fetchEducations.pending.type })
        expect(state.status).toBe('loading')
    })

    it('stores the payload and marks succeeded on fulfilled', () => {
        const payload = [{ date: '2022', title: 'Test', description: 'Desc' }]
        const state = reducer(initialState, { type: fetchEducations.fulfilled.type, payload })
        expect(state.status).toBe('succeeded')
        expect(state.data).toEqual(payload)
    })

    it('stores the error message and marks failed on rejected', () => {
        const state = reducer(initialState, {
            type: fetchEducations.rejected.type,
            error: { message: 'Network Error' },
        })
        expect(state.status).toBe('failed')
        expect(state.error).toBe('Network Error')
    })
})
