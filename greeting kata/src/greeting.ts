import { Group } from './group';

class Greeter {
  private readonly HELLO = 'Hello'
  private readonly DOUBLE_QUOTE = '"';
  private readonly DOUBLE_QUOTE_REGEXP = /"/g;

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
    let content = `${this.HELLO}${Separators.COMMA}${Separators.WHITE_SPACE}`

    content = `${content}${this.addLowerCaseNames(group)}`
    const upperCaseNames = group.people.filter(person => this.isUpperCase(person))
    if (upperCaseNames.length > 0)
      content = `${content}${this.addUpperCaseNames(new Group(upperCaseNames))}`
    return content
  }

  private addLowerCaseNames(group: Group):string {
    let content = '';
    const lowerCaseNames = group.people.filter(person =>  !this.isUpperCase(person))
    lowerCaseNames.forEach(person => {

        if (!group.isFirstMember(person)) {
          content = `${content}${this.addSeparator(group,person)}`
        }
        content = `${content}${this.formattedPerson(person)}`
      
    });
    return content
  }

  private greetSingle(person: string) {
    let greet = `${this.HELLO}${Separators.COMMA}${Separators.WHITE_SPACE}${person}${Separators.DOT}`
    return this.isUpperCase(person) ? greet.toUpperCase() : greet;
  }

  private addUpperCaseNames(upperCaseNames: Group) {
    let content = ''
    content = `${content}${Separators.DOT}${Separators.AND.toUpperCase()}`
    content = `${content}${this.HELLO.toUpperCase()}${Separators.WHITE_SPACE}`
    upperCaseNames.people.forEach(person => {
      if (!upperCaseNames.isFirstMember(person)) {
        content = `${content}${this.addSeparator(upperCaseNames,person)}`
      }
      content = `${content}${person}`
    })
    return `${content}${'!'}`
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
      return `${subgroup[0].trim()}${Separators.COMMA}${Separators.WHITE_SPACE}${subgroup[1].trim()}`;
    }else if (person.indexOf(Separators.COMMA) != -1) {
      let subgroup = person.split(Separators.COMMA)
      return `${subgroup[0].trim()}${Separators.COMMA}${Separators.WHITE_SPACE}${Separators.TRIMED_AND}${Separators.WHITE_SPACE}${subgroup[1].trim()}` 
    }
    return person;
  }

  private isUpperCase = (person: string) =>  person.toUpperCase() === person
  
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