class Greeter {
  DOT = '.';
  HELLO = 'Hello, ';
  
  public greet(toGreet: any): string{
    if(toGreet == null)
      return 'Hello, my friend.'
    if(toGreet instanceof Array)
      return this.greetGroup(<Array<string>>toGreet);
    else
      return this.greetSingle(toGreet);
  }

  private greetGroup(group: Array<string>): string{
    let response = this.HELLO
    group.forEach(person => {
      response = response.concat(person)
      if(group[group.length -1] != person)
        response = response.concat(" and ")
    });
    return response;
  }

  private greetSingle(person: string):string {
    let greet = this.HELLO.concat(person).concat(this.DOT);
    return this.isUpperCase(person) ? greet.toUpperCase() : greet;
  }

  private isUpperCase = (person: string):boolean =>{ return person.toUpperCase() == person}
}

export {Greeter}