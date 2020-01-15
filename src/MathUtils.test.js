import * as MathUtils from './MathUtils'

test('clamp min', () => {

    const clamp = jest.fn(() => MathUtils.clamp(10, 100, 200))

    expect(clamp()).toBe(100)

})
test('clamp max', () => {

    const clamp = jest.fn(() => MathUtils.clamp(300, 100, 200))

    expect(clamp()).toBe(200)

})
test('random min max', () => {

    const n = jest.fn(() => MathUtils.random(10, 20))
    expect(n()).toBeLessThanOrEqual(20)
    expect(n()).toBeGreaterThanOrEqual(10)

})
test('random int min max', () => {

    const n = jest.fn(() => MathUtils.randomInt(0, 100))
    expect(n()).toBeLessThanOrEqual(100)
    expect(n()).toBeGreaterThanOrEqual(0)
    
})