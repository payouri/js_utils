import { getDiffs, mergeDeep, hasProperties } from './ObjectUtils'

test('getDiffs', () => {
    const o1 = {
        a: '1',
        b: 2,
        c: false
    }
    const o2 = {
        a: '1',
        b: '2',
        c: ''
    }
    expect(getDiffs(o1, o2)).toStrictEqual({
        b: '2',
        c: ''
    })
})

test('mergeDeep', () => {
    const o1 = {
        a: '1',
        b: 2,
        c: false,
        e: {},
    }
    const o2 = {
        a: '1',
        b: '2',
        c: {
            a: '',
            b: '2',
        },
        d: {},
        e: {
            h: ''
        }
    }
    expect(mergeDeep(o1, o2)).toStrictEqual({
        a: '1',
        b: '2',
        c: {
            a: '',
            b: '2',
        },
        d: {},
        e: {
            h: ''
        }
    })
})

test('hasProperties', () => {
    const o1 = {
        a: '1',
        b: 2,
        c: false
    }
    // expect(hasProperties(o1, 'a')).toThrow()
    expect(hasProperties(o1, [])).toBe(true)
    expect(hasProperties(o1, ['a'])).toBe(true) 
    expect(hasProperties(o1, [1, 'f'])).toBe(false) 
})