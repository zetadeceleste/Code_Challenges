const validParentheses = require('../challenges/valid-parentheses')

describe('valid parentheses', () => {
  test("should return 'Invalid string' if recieve an empty string", () => {
    const expected = 'Invalid string'
    const result = validParentheses('')
    expect(expected).toBe(result)
  })
  test("should return true if recieve '()'", () => {
    const expected = true
    const result = validParentheses('()')
    expect(expected).toBe(result)
  })
  test("should return true if recieve '()[]{}'", () => {
    const expected = true
    const result = validParentheses('()[]{}')
    expect(expected).toBe(result)
  })
  test("should return false if recieve '(]'", () => {
    const expected = false
    const result = validParentheses('(]')
    expect(expected).toBe(result)
  })
})
