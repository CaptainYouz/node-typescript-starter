import sayHello from '../src/sayHello';

test('should say Hello World!', () => {
  expect(sayHello()).toBe('Hello World!');
})