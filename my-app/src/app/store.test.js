import { describe, it, expect, beforeEach } from 'vitest'
import { store } from './store'

describe('store', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    it('exposes the education and skills slices', () => {
        const state = store.getState()
        expect(state).toHaveProperty('education')
        expect(state).toHaveProperty('skills')
    })

    it('persists the skills slice to localStorage on every dispatch', () => {
        store.dispatch({ type: 'noop' })
        const stored = JSON.parse(localStorage.getItem('skills'))
        expect(stored).toEqual(store.getState().skills.data)
    })
})
