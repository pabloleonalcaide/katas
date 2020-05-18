class Greeter {
  public greet(toGreet: any): string{
    if(toGreet == null)
      return 'Hello, my friend.'
    return 'Hello, Bob.';
  }
}

export {Greeter}