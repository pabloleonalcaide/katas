import {Greeter} from '../src/greeting';
import { Group } from '../src/group';

describe('Greeting Kata', () => {
  const greeter = new Greeter();
  test('Greet a single name', () => {
    let expectedResponse = 'Hello, Bob.'
    expect(greeter.greet('Bob')).toBe(expectedResponse);
  })

  test('Handle nulls by using a stand-in', () => {
    let expectedResponse = 'Hello, my friend.'
    expect(greeter.greet(null)).toBe(expectedResponse);
  })

  test('Handle shouting', () => {
    let expectedResponse = 'HELLO, BOB.'
    expect(greeter.greet('BOB')).toBe(expectedResponse);
  })

  test('Handle two names', () => {
    let expectedResponse = 'Hello, Bob and Wyde'
    const group = new Group(['Bob', 'Wyde']);
    expect(greeter.greet(group)).toBe(expectedResponse);
  })

  test('Handle more than two names', () => {
    let expectedResponse = 'Hello, Bob, Logan and Wyde'
    const group = new Group(['Bob', 'Logan', 'Wyde']);
    expect(greeter.greet(group)).toBe(expectedResponse);
  })

  test('Handle mixing of normal and shouted names', () => {
    let expectedResponse = 'Hello, Amy and Charlotte. AND HELLO BRIAN!'
    const group = new Group(['Amy', 'BRIAN', 'Charlotte']);
    expect(greeter.greet(group)).toBe(expectedResponse);
  })
})
