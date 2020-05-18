import {Greeter} from '../src/greeting';

describe("Greeting Kata", () => {
  const greeter = new Greeter();
  test('Greet a single name', () => {
    let expectedResponse = "Hello, Bob."
    expect(greeter.greet("Bob")).toBe(expectedResponse);
  })

  test('Handle nulls by using a stand-in', () => {
    let expectedResponse = "Hello, my friend."
    expect(greeter.greet(null)).toBe(expectedResponse);
  })

  test('Handle shouting', () => {
    let expectedResponse = "HELLO, BOB."
    expect(greeter.greet('BOB')).toBe(expectedResponse);
  })


})