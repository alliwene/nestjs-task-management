function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

// describe('Example test', () => {
//   it('equals true', () => {
//     expect(true).toBe(true);
//   });
// });

describe('addNumbers', () => {
  it('should add two numbers', () => {
    expect(addNumbers(1, 2)).toEqual(3);
  });
});
