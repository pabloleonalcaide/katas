import { Group } from './group';

class Greeter {
  DOT = '.';
  COMA = ", "
  HELLO = 'Hello';
  AND = ' and ';

  public greet(toGreet: any): string{
    if(toGreet == null)
      return this.defaultGreet();
    if(toGreet instanceof Group)
    return this.greetGroup(toGreet);
    else
      return this.greetSingle(toGreet);
  }

private greetGroup(group: Group): string{
    let response = this.HELLO.concat(this.COMA)
    group.people.forEach(person => {
      if(!group.isFirstMember(person))
        response = group.isLastMember(person) ? response.concat(this.AND) : response.concat(this.COMA);
      response = response.concat(person)
    });
    return response;
  }

  private greetSingle(person: string):string {
    let greet = this.HELLO.concat(this.COMA).concat(person).concat(this.DOT);
    return this.isUpperCase(person) ? greet.toUpperCase() : greet;
  }

  private defaultGreet = ():string => {return 'Hello, my friend.'};

  private isUpperCase = (person: string):boolean =>{ return person.toUpperCase() == person}
}

export {Greeter}