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

   defaultGreet = ():string => 'Hello, my friend.'

  private greetGroup(group: Group) {
    let content = `${this.HELLO}${Separators.COMMA}${Separators.WHITE_SPACE}${this.greetLowerCaseNames(group)}`
    const upperCaseNames = group.people.filter(person => this.isUpperCase(person))
    if (upperCaseNames.length > 0)
      content = `${content}${this.greetUpperCaseNames(new Group(upperCaseNames))}`
    return content
  }

  private greetLowerCaseNames(group: Group):string {
    let content = '';
    const lowerCaseNames = group.people.filter(person =>  !this.isUpperCase(person))
    lowerCaseNames.reduce(
      (prev, curr) =>{
        if (!group.isFirstMember(curr)) {
          content = `${content}${this.getSeparator(group,curr)}`
        }
        content = `${content}${this.formatNames(curr)}`

        return content
      },'')
    return content
  }

  private greetSingle(person: string) {
    const greet = `${this.HELLO}${Separators.COMMA}${Separators.WHITE_SPACE}${person}${Separators.DOT}`
    return this.isUpperCase(person) ? greet.toUpperCase() : greet;
  }

  private greetUpperCaseNames(upperCaseNames: Group) {
    let content = ''
    content = `${content}${Separators.DOT}${Separators.AND.toUpperCase()}`
    content = `${content}${this.HELLO.toUpperCase()}${Separators.WHITE_SPACE}`
    upperCaseNames.people.reduce((prev, curr) => {
      if (!upperCaseNames.isFirstMember(curr)) {
        content = `${content}${this.getSeparator(upperCaseNames,curr)}`
      }
      content =  `${content}${curr}`

      return content
    }, content)
    return `${content}${'!'}`
  }

  private getSeparator(group: Group, person: string) {
    const isLastMember = group.isLastMember(person)
    const hasDoubleQuotes = person.includes(this.DOUBLE_QUOTE)
    const DoesNotHaveCommas = !person.includes(Separators.COMMA)
    return ( isLastMember && (hasDoubleQuotes || DoesNotHaveCommas ))
      ? `${Separators.AND}`
      : `${Separators.COMMA}${Separators.WHITE_SPACE}`
  }

  private formatNames(person: string): string {

    if (person.indexOf(this.DOUBLE_QUOTE) != -1 && person.indexOf(Separators.COMMA) != -1){
      person = person.replace(this.DOUBLE_QUOTE_REGEXP, '');
      const subgroup = person.split(Separators.COMMA)
      return `${subgroup[0].trim()}${Separators.COMMA}${Separators.WHITE_SPACE}${subgroup[1].trim()}`;
    }else if (person.indexOf(Separators.COMMA) != -1) {
      const subgroup = person.split(Separators.COMMA)
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