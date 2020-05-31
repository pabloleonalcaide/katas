import { Group } from './group';

class Greeter {
  private readonly HELLO = 'Hello'
  private readonly DOUBLE_QUOTE = '"';
  private readonly DOUBLE_QUOTE_REGEXP = /"/g;

  private response = '';

  public greet(toGreet: any): string {

    toGreet instanceof Group ? this.greetGroup(toGreet) :
      toGreet == null ? this.defaultGreet() : this.greetSingle(toGreet);

    return this.response;
  }

  private defaultGreet() {
    this.response = 'Hello, my friend.'
  };


  private greetGroup(group: Group) {
    this.response = this.response.concat(this.HELLO).concat(Separators.COMA).concat(Separators.WHITE_SPACE)
    let upperCaseNames: string[] = [];

    this.prepareNamesToGreet(group, upperCaseNames);
    if (upperCaseNames.length > 0)
      this.addUpperCaseNames(new Group(upperCaseNames))
  }

  private prepareNamesToGreet(group: Group, upperCaseNames: string[]) {
    group.people.forEach(person => {
      if (this.isUpperCase(person)) {
        upperCaseNames.push(person);
      }
      else {
        if (!group.isFirstMember(person)) {
          this.addSeparator(group, person);
        }
        this.response = this.response.concat(this.formattedPerson(person));
      }
    });
  }

  private greetSingle(person: string) {
    let greet = this.HELLO.concat(Separators.COMA).concat(Separators.WHITE_SPACE).concat(person).concat(Separators.DOT);
    this.response = this.isUpperCase(person) ? greet.toUpperCase() : greet;
  }

  private addUpperCaseNames(upperCaseNames: Group) {

    this.response = this.response.concat(Separators.DOT).concat(Separators.AND.toUpperCase())

    this.response = this.response.concat(this.HELLO.toUpperCase()).concat(Separators.WHITE_SPACE)
    upperCaseNames.people.forEach(person => {
      if (!upperCaseNames.isFirstMember(person)) {
        this.addSeparator(upperCaseNames, person);
      }
      this.response = this.response.concat(person)
    })
    this.response = this.response.concat("!")
  }

  private addSeparator(group: Group, person: string) {

    this.response = (group.isLastMember(person) && (person.includes(this.DOUBLE_QUOTE) || !person.includes(Separators.COMA))) ? this.response.concat(Separators.AND) :
      this.response.concat(Separators.COMA).concat(Separators.WHITE_SPACE);
  }

  private formattedPerson(person: string): string {
    if (person.indexOf(this.DOUBLE_QUOTE) != -1 && person.indexOf(Separators.COMA) != -1){
      person = person.replace(this.DOUBLE_QUOTE_REGEXP, '');
      let subgroup = person.split(Separators.COMA)
      person = subgroup[0].trim().concat(Separators.COMA).concat(Separators.WHITE_SPACE).concat(subgroup[1].trim())
    }else if (person.indexOf(Separators.COMA) != -1) {
      let subgroup = person.split(Separators.COMA)
      person = subgroup[0].trim().concat(Separators.COMA).concat(Separators.WHITE_SPACE).concat(Separators.TRIMED_AND).concat(Separators.WHITE_SPACE).concat(subgroup[1].trim());
    }
    return person;
  }

  private isUpperCase(person: string): boolean {
    return person.toUpperCase() === person
  }
}

enum Separators {
  DOT = '.',
  COMA = ",",
  AND = ' and ',
  TRIMED_AND = 'and',
  WHITE_SPACE = ' '
}

export {
  Greeter
}