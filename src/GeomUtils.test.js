import { calcPointCoordsOnCircle, distBetweenTwoPts, getCirclePerimeter, getDiscArea } from './GeomUtils'

test('calcPointCoordsOnCircle', () => {
    const fn = jest.fn(() => calcPointCoordsOnCircle(50, 50, 10, 180))
    expect(fn()).toHaveProperty('x')
    expect(fn()).toHaveProperty('y')
    const fn2 = jest.fn(() => calcPointCoordsOnCircle())
    fn2()
    expect(fn2).toHaveReturnedWith({ x: NaN, y: NaN })
})
test('distBetweenTwoPts', () => {
    const fn = jest.fn(() => distBetweenTwoPts({ x: 10, y: 30 }, { x: 50, y: 20 }))
    expect(fn()).toBeCloseTo(41.23)
    const fn2 = jest.fn(() => distBetweenTwoPts())
    expect(fn2()).toBe(NaN)
})
test('getCirclePerimeter', () => {
    const fn = jest.fn(() => getCirclePerimeter(50))
    expect(fn()).toBeCloseTo(314.16)
    expect(() => {
        getCirclePerimeter('aaaa')
    }).toThrow()
})
test('getDiscArea', () => {
    const fn = jest.fn(() => getDiscArea(50))
    expect(fn()).toBeCloseTo(7853.98, 1)
    expect(() => {
        getDiscArea('aaaa')
    }).toThrow()
})