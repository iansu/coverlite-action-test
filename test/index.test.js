const { sayHello } = require('../src');

describe('index', () => {
  test('sayHello', () => {
    expect(sayHello('Ian')).toBe('Hello Ian');
  })
})
