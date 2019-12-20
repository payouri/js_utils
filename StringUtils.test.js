import { generateRandom, capitalize, unCapitalize, capitalizeWords, replaceAll, stringToFunction, secsToMin, nFormatter, encodeHTML, generateHexKey } from './StringUtils'
test('generateRandom', () => {
    const fn = jest.fn(() => generateRandom())
    expect(fn()).toHaveLength(6)
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
})
test('secsToMin', () => {
    const fn = jest.fn(() => secsToMin(300))
    expect(fn()).toBe('5:00')
})
test('nFormatter', () => {
    const fn = jest.fn(() => nFormatter(1000000, 0))
    expect(fn()).toBe('1M')
})
test('encodeHTML', () => {
    const fn = jest.fn(() => encodeHTML('<script></script>'))
    expect(fn()).toBe('&lt;script>&lt;/script>')
})
test('generateHexKey', () => {
    const fn = jest.fn(() => generateHexKey())
    expect(fn()).toHaveLength(11)
})