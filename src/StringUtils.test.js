import { generateRandom, capitalize, unCapitalize, capitalizeWords, replaceAll, stringToFunction, secsToMin, nFormatter, encodeHTML, generateHexKey } from './StringUtils'
test('generateRandom', () => {
    const fn = jest.fn(() => generateRandom())
    expect(fn()).toHaveLength(6)
    const fn2 = jest.fn(() => generateRandom(10, 'sdqdqds'))
    expect(fn2()).toHaveLength(10)
    const fn3 = jest.fn(() => generateRandom(8, []))
    expect(fn3()).toHaveLength(8)
    const fn4 = jest.fn(() => generateRandom(false, []))
    expect(fn4()).toBeUndefined()
})
test('capitalize', () => {
    const fn = jest.fn(() => capitalize('abcdef'))
    expect(fn()).toBe('Abcdef')
})
test('unCapitalize', () => {
    const fn = jest.fn(() => unCapitalize('ABCDEF'))
    expect(fn()).toBe('aBCDEF')
})
test('capitalizeWords', () => {
    const fn = jest.fn(() => capitalizeWords('hello world'))
    expect(fn()).toBe('Hello World')
})
test('replaceAll', () => {
    const fn = jest.fn(() => replaceAll('I love music, and I play it too', 'I', 'You'))
    expect(fn()).toBe('You love music, and You play it too')
})
test('stringToFunction', () => {
    const fn = jest.fn(() => stringToFunction('global.console.log'))
    expect(fn()).toBe(console.log)
    expect(() => {
        stringToFunction('global.aaa')
    }).toThrow()
})
test('secsToMin', () => {
    const fn = jest.fn(() => secsToMin(300))
    expect(fn()).toBe('5:00')
    const fn2 = jest.fn(() => secsToMin(3900))
    expect(fn2()).toBe('1:05:00')
    const fn3 = jest.fn(() => secsToMin(4202))
    expect(fn3()).toBe('1:10:02')
})
test('nFormatter', () => {
    const fn = jest.fn(() => nFormatter(1000000, 0))
    expect(fn()).toBe('1M')
    const fn2 = jest.fn(() => nFormatter(1000000))
    expect(fn2()).toBe('1M')
})
test('encodeHTML', () => {
    const fn = jest.fn(() => encodeHTML('<script></script>'))
    expect(fn()).toBe('&lt;script>&lt;/script>')
    const fn2 = jest.fn(() => encodeHTML(11))
    expect(fn2()).toBe(11)
})
test('generateHexKey', () => {
    const fn = jest.fn(() => generateHexKey())
    expect(fn()).toHaveLength(11)
})