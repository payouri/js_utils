import { debounce, throttle } from './EventUtils'
jest.useFakeTimers();

describe('debounce', () => {
    let fn;
    let fn2;

    beforeEach(() => {
        fn = jest.fn()
        fn2 = debounce(fn, 300)
    })

    test('execute just once', () => {
        for (let i = 0; i < 100; i++) {
            fn2();
        }

        // fast-forward time
        jest.runAllTimers();

        expect(fn).toHaveBeenCalledTimes(1);
    });
})

describe('throttle', () => {
    let fn;
    let fn2;

    beforeEach(() => {
        fn = jest.fn()
        fn2 = throttle(fn, 300)
    })

    test('execute just once', () => {
        for (let i = 0; i < 100; i++) {
            fn2();
        }

        // fast-forward time
        jest.runAllTimers();

        expect(fn).toHaveBeenCalledTimes(1);
    });
})