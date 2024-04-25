const baseballGame = require('../challenges/baseball-game')

describe('baseball game', () => {
  test("should return 'Invalid operation/s' if recieve an empty array", () => {
    const expected = 'Invalid operation/s'
    const result = baseballGame([])
    expect(expected).toBe(result)
  })
  test("should return 'Invalid operation/s' if recieve an array of more than 1000 elements", () => {
    const expected = 'Invalid operation/s'
    const result = baseballGame(Array.from(Array(1001).keys()))
    expect(expected).toBe(result)
  })
  test("should return 'Invalid operation/s' if recieve ['a']", () => {
    const expected = 'Invalid operation/s'
    const result = baseballGame(['a'])
    expect(expected).toBe(result)
  })
  test("should return 'Invalid operation/s' if recieve ['a', '1']", () => {
    const expected = 'Invalid operation/s'
    const result = baseballGame(['a', '1'])
    expect(expected).toBe(result)
  })
  test("should return 2 if recieve ['1','1']", () => {
    const expected = 2
    const result = baseballGame(['1', '1'])
    expect(expected).toBe(result)
  })
  test("should return 4 if recieve ['1','1','D']", () => {
    const expected = 4
    const result = baseballGame(['1', '1', 'D'])
    expect(expected).toBe(result)
  })
  test("should return 'Invalid operation/s' if recieve ['1','1','d']", () => {
    const expected = 'Invalid operation/s'
    const result = baseballGame(['1', '1', 'd'])
    expect(expected).toBe(result)
  })
  test("should return 3 if recieve ['1','D']", () => {
    const expected = 3
    const result = baseballGame(['1', 'D'])
    expect(expected).toBe(result)
  })
  test("should return 'Invalid operation/s' if recieve ['D']", () => {
    const expected = 'Invalid operation/s'
    const result = baseballGame(['D'])
    expect(expected).toBe(result)
  })
  test("should return 1 if recieve ['1','1','C']", () => {
    const expected = 1
    const result = baseballGame(['1', '1', 'C'])
    expect(expected).toBe(result)
  })
  test("should return 'Invalid operation/s' if recieve ['1','1','c']", () => {
    const expected = 'Invalid operation/s'
    const result = baseballGame(['1', '1', 'c'])
    expect(expected).toBe(result)
  })
  test("should return 0 if recieve ['1','C']", () => {
    const expected = 0
    const result = baseballGame(['1', 'C'])
    expect(expected).toBe(result)
  })
  test("should return 'Invalid operation/s' if recieve ['C']", () => {
    const expected = 'Invalid operation/s'
    const result = baseballGame(['C'])
    expect(expected).toBe(result)
  })
  test("should return 4 if recieve ['1','1','+']", () => {
    const expected = 4
    const result = baseballGame(['1', '1', '+'])
    expect(expected).toBe(result)
  })
  test("should return 'Invalid operation/s' if recieve ['1','1','-']", () => {
    const expected = 'Invalid operation/s'
    const result = baseballGame(['1', '1', '-'])
    expect(expected).toBe(result)
  })
  test("should return 'Invalid operation/s' if recieve ['1','+']", () => {
    const expected = 'Invalid operation/s'
    const result = baseballGame(['1', '+'])
    expect(expected).toBe(result)
  })
  test("should return 'Invalid operation/s' if recieve ['+']", () => {
    const expected = 'Invalid operation/s'
    const result = baseballGame(['+'])
    expect(expected).toBe(result)
  })
  test("should return 30 if recieve ['5','2','C', 'D', '+']", () => {
    const expected = 30
    const result = baseballGame(['5', '2', 'C', 'D', '+'])
    expect(expected).toBe(result)
  })
  test("should return 27 if recieve ['5','-2','4', 'C', 'D', 9, '+', '+']", () => {
    const expected = 27
    const result = baseballGame(['5', '-2', '4', 'C', 'D', '9', '+', '+'])
    expect(expected).toBe(result)
  })
})
