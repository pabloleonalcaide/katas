class Greeter {
  public greet(toGreet: any): string{
    if(toGreet == null)
      return 'Hello, my friend.'
    let name = <string> toGreet;
    if (name.toUpperCase() == name)
      return 'HELLO, BOB.'
    return 'Hello, Bob.';
  }
}

export {Greeter}