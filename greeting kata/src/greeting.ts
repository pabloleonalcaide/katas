import { Group } from './group';

class Greeter {
  private readonly HELLO = 'Hello'
  private readonly DOUBLE_QUOTE = '"';
  private readonly DOUBLE_QUOTE_REGEXP = /"/g;

  private response = '';

  public greet(toGreet: string | Group): string {

    if(toGreet == null){ 
      return this.defaultGreet()
    }
    
    if(toGreet instanceof Group) {
      return this.greetGroup(toGreet)
    }
    return this.greetSingle(toGreet);

  }

  private defaultGreet():string {
    return 'Hello, my friend.'
  };


  private greetGroup(group: Group) {
    this.response = `${this.response}${this.HELLO}${Separators.COMMA}${Separators.WHITE_SPACE}`
    let upperCaseNames: string[] = [];

    this.prepareNamesToGreet(group, upperCaseNames);
    if (upperCaseNames.length > 0)
      this.addUpperCaseNames(new Group(upperCaseNames))
    return this.response
  }

  private prepareNamesToGreet(group: Group, upperCaseNames: string[]) {
    group.people.forEach(person => {
      if (this.isUpperCase(person)) {
        upperCaseNames.push(person);
      }
      else {
        if (!group.isFirstMember(person)) {
          this.response = `${this.response}${this.addSeparator(group,person)}`
        }
        this.response = `${this.response}${this.formattedPerson(person)}`
      }
    });
  }

  private greetSingle(person: string) {
    let greet = `${this.HELLO}${Separators.COMMA}${Separators.WHITE_SPACE}${person}${Separators.DOT}`
    return this.isUpperCase(person) ? greet.toUpperCase() : greet;
  }

  private addUpperCaseNames(upperCaseNames: Group) {

    this.response = `${this.response}${Separators.DOT}${Separators.AND.toUpperCase()}`
    this.response = `${this.response}${this.HELLO.toUpperCase()}${Separators.WHITE_SPACE}`
    upperCaseNames.people.forEach(person => {
      if (!upperCaseNames.isFirstMember(person)) {
        this.response = `${this.response}${this.addSeparator(upperCaseNames,person)}`
      }
      this.response = `${this.response}${person}`
    })
    this.response = `${this.response}${'!'}`
  }

  private addSeparator(group: Group, person: string) {
    const isLastMember = group.isLastMember(person)
    const hasDoubleQuotes = person.includes(this.DOUBLE_QUOTE)
    const DoesNotHaveCommas = !person.includes(Separators.COMMA)
    return ( isLastMember && (hasDoubleQuotes || DoesNotHaveCommas )) 
      ? `${Separators.AND}`
      : `${Separators.COMMA}${Separators.WHITE_SPACE}`
  }

  private formattedPerson(person: string): string {
    if (person.indexOf(this.DOUBLE_QUOTE) != -1 && person.indexOf(Separators.COMMA) != -1){
      person = person.replace(this.DOUBLE_QUOTE_REGEXP, '');
      let subgroup = person.split(Separators.COMMA)
      person = subgroup[0].trim().concat(Separators.COMMA).concat(Separators.WHITE_SPACE).concat(subgroup[1].trim())
    }else if (person.indexOf(Separators.COMMA) != -1) {
      let subgroup = person.split(Separators.COMMA)
      person = subgroup[0].trim().concat(Separators.COMMA).concat(Separators.WHITE_SPACE).concat(Separators.TRIMED_AND).concat(Separators.WHITE_SPACE).concat(subgroup[1].trim());
    }
    return person;
  }

  private isUpperCase(person: string): boolean {
    return person.toUpperCase() === person
  }
}

enum Separators {
  DOT = '.',
  COMMA = ",",
  AND = ' and ',
  TRIMED_AND = 'and',
  WHITE_SPACE = ' '
}

export {
  Greeter
}