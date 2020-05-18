import {Greeter} from '../src/greeting';

describe("Greeting Kata", () => {
  const greeter = new Greeter();
  test('greet should return  a greet for a single name', () => {
    const expectedResponse = "Hello, Bob."
    expect(greeter.greet("Bob")).toBe(expectedResponse);
  })
})