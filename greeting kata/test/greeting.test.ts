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
    let group = new Group(['Bob', 'Wyde']);
    expect(greeter.greet(group)).toBe(expectedResponse);
  })

  test('Handle more than two names', () => {
    let expectedResponse = 'Hello, Bob, Logan and Wyde'
    let group = new Group(['Bob', 'Logan', 'Wyde']);
    expect(greeter.greet(group)).toBe(expectedResponse);
  })

  test('Handle mixing of normal and shouted names', () => {
    let expectedResponse = 'Hello, Amy and Charlotte. AND HELLO BRIAN!'
    let group = new Group(['Amy', 'BRIAN', 'Charlotte']);
    expect(greeter.greet(group)).toBe(expectedResponse);
  })

  test('Split names with commas into separate entries', () => {
    let expectedResponse = 'Hello, Bob, Charlie, and Dianne';
    let group = new Group(['Bob','Charlie, Dianne']);
    expect(greeter.greet(group)).toBe(expectedResponse);
  })

  test('Allow commas in entries to be escapes', () => {
    let expectedResponse = 'Hello, Bob and Charlie, Dianne';
    let group = new Group(['Bob', '"Charlie,Dianne"']);
    expect(greeter.greet(group)).toBe(expectedResponse);
  })
})
