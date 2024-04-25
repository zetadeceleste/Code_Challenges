const inmutableName = require('../challenges/inmutable-name')

describe('inmutable name', () => {
  test('should return "Hello <Inmutable Name>"', () => {
    const expected = 'Hello <Inmutable Name>'
    const result = inmutableName.hello()
    expect(result).toBe(expected)
  })
  test('should return "Hello <Inmutable Name>" if the object name changes to "Celeste"', () => {
    const expected = 'Hello <Inmutable Name>'
    inmutableName.name = 'Celeste'
    const result = inmutableName.hello()
    expect(result).toBe(expected)
  })
})
