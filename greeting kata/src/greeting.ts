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
    return this.greetSingle(toGreet);
  }

private greetGroup(group: Group): string{
    let response = this.HELLO.concat(this.COMA)
    let upperCaseNames: string[] = [];
    group.people.forEach(person => {
      if(this.isUpperCase(person)){
        upperCaseNames.push(person)
      }else{
        if(!group.isFirstMember(person)){
          response = group.isLastMember(person) ? response.concat(this.AND) : response.concat(this.COMA);
        }
      response = response.concat(person)
      }
    });
    response = upperCaseNames.length > 0 ? this.addUpperCaseNames(response, new Group(upperCaseNames)) : response
    return response;
  }

  private greetSingle(person: string):string {
    let greet = this.HELLO.concat(this.COMA).concat(person).concat(this.DOT);
    return this.isUpperCase(person) ? greet.toUpperCase() : greet;
  }

  private addUpperCaseNames(response: string, upperCaseNames: Group): string{
    
    response = response.concat(this.DOT).concat(this.AND.toUpperCase())
    
    if (upperCaseNames.people.length !== 0){
      response = response.concat(this.HELLO.toUpperCase()+ " ")
      upperCaseNames.people.forEach(person => {
        if(!upperCaseNames.isFirstMember(person)){
          response = upperCaseNames.isLastMember(person) ? response.concat(this.AND) : response.concat(this.COMA);
        }
      response = response.concat(person)
      })
      response = response.concat("!")
    } 
    
    return response;
  }
  private defaultGreet = ():string => {return 'Hello, my friend.'};

  private isUpperCase = (person: string):boolean =>{ return person.toUpperCase() == person}
}

export {Greeter}