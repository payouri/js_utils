import { dateFromObjectId, timeAgo, daysInMonth, getLastDayOfTheMonth, getFirstDayOfTheMonth } from './DateUtils'

test.each([
    ['507f191e810c19729de860ea', {
        locale: 'en-US',
        options: {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }
    }, 'Wed, 10/17/2012'],
    ['507f191e810c19729de860ea', 'iso', '2012-10-17T20:46:22.000Z'],
    ['507f191e810c19729de860ea', 'string', 'Wed Oct 17 2012'],
    ['507f191e810c19729de860ea', false, 1350506782000]
])('dateFromObjectId(%s, %p)', (a, b, expected) => {
    expect(dateFromObjectId(a, b)).toBe(expected)
})

test('timeago', () => {
    const ago = jest.fn(() => timeAgo(Date.now()))
    expect(ago()).toBe('less than a minute ago')
    const fn = jest.fn(() => timeAgo())
    expect(fn()).toBeUndefined()
    const fn2 = jest.fn(() => timeAgo('invalid'))
    expect(fn2()).toBe('less than a minute ago')
})

test('daysInMonth', () => {
    expect(daysInMonth(11, 2019)).toBe(31)
})

test('getLastDayOfTheMonth', () => {
    expect(getLastDayOfTheMonth(11, 2019)).toEqual(new Date('2019-12-31T00:00:00.000Z'))
})
test('getFirstDayOfTheMonth', () => {
    expect(getFirstDayOfTheMonth(11, 2019)).toEqual(new Date('2019-12-01T00:00:00.000Z'))
})