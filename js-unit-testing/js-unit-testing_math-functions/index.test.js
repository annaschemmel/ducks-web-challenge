import { add, subtract, multiply, divide } from ".";

//-------------- add ----------------

test("adds the numbers 2 and 3 correctly", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});

test("gives us a negative value if the greater argument is negative", () => {
  const result = add(-5, 3);
  expect(result).toBeLessThan(0);
});

test("gives us a value close to 0.3 if 0.1 & 0.2 are added", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

//-------------- subtract ----------------

test("subtracts the number 5 from 15 correctly", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("returns a neg value if the second number is greater and neg", () => {
  const result = subtract(5, 6);
  expect(result).toBeLessThan(0);
});

//-------------- multiply ----------------

test("multiplies 4 and 2 correctly", () => {
  const result = multiply(4, 2);
  expect(result).toBe(8);
});

test("returns a negative value if only the first argument is negative", () => {
  const result = multiply(-3, 3);
  expect(result).toBeLessThan(0);
});

test("returns a negative value if only the second argument is negative", () => {
  const result = multiply(3, -3);
  expect(result).toBeLessThan(0);
});

test("returns a positive value if called with two negative arguments", () => {
  const result = multiply(-3, -3);
  expect(result).toBeGreaterThan(0);
});

//-------------- divide ----------------

test("divides 9 by 3 correctly", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});

test("the message 'You should not do this!' if divided by 0", () => {
  const result = divide(5, 0);
  expect(result).toBe("You should not do this!");
});
