import { isObject, isValidEmail, isValidPhone, } from './Validators'

test('isObject', () => {
    const obj = { test: 'test' }
    const arr = []
    const number = 3
    expect(isObject(obj)).toBe(true)
    expect(isObject(arr)).toBe(false)
    expect(isObject(number)).toBe(false)
})

test('isValidEmail', () => {
    const valid = 'xyz@aaa.com'
    const invalid = 'aaa@.com'
    expect(isValidEmail(valid)).toBe(true)
    expect(isValidEmail(invalid)).toBe(false)
})

test('isValidPhone', () => {
    const validPhone = '+33712346378'
    const validPhone2 = '0712346378'
    const validPhone3 = '0412346378'
    const inValidPhone = '041234'
    const inValidPhone2 = '+33799'
    expect(isValidPhone(validPhone)).toBe(true)
    expect(isValidPhone(validPhone2)).toBe(true)
    expect(isValidPhone(validPhone3)).toBe(true)
    expect(isValidPhone(inValidPhone)).toBe(false)
    expect(isValidPhone(inValidPhone2)).toBe(false)
})