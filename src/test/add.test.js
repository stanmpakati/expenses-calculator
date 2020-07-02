const add = (a, b) => a+b;
const greeting = (name) => `Hello ${name}:`;

it('should add two numbers', () => {
  const result = add(1,2)
  expect(result).toEqual(3)
})

it ('should greet user', () => {
  expect('Hello Mike!').toEqual(greeting('Mike'))
})