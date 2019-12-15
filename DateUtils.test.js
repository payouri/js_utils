import { dateFromObjectId, timeAgo } from './DateUtils'

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
    ['507f191e810c19729de860ea', 'string', 'Wed Oct 17 2012']
])('dateFromObjectId(%s, %p)', (a, b, expected) => {
    expect(dateFromObjectId(a, b)).toBe(expected)
})

test('timeago', () => {
    const ago = jest.fn(() => timeAgo(Date.now()))
    expect(ago()).toBe('less than a minute ago')
})