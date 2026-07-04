import { describe, it, expect } from 'vitest'
import { MOBILE_BREAKPOINT, PRIMARY_COLOR } from './constant'

describe('constant', () => {
    it('exposes the expected values', () => {
        expect(MOBILE_BREAKPOINT).toBe(768)
        expect(PRIMARY_COLOR).toBe('#26C17E')
    })
})
