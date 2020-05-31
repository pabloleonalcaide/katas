import {
  Group
} from './group';

class Greeter {
  HELLO = 'Hello'
  response = '';

  public greet(toGreet: any): string {

    toGreet instanceof Group ? this.greetGroup(toGreet) :
      toGreet == null ? this.defaultGreet() : this.greetSingle(toGreet);

    return this.response;
  }

  private defaultGreet() {
    this.response = 'Hello, my friend.'
  };


  private greetGroup(group: Group) {
    this.response = this.response.concat(this.HELLO).concat(Separators.COMA)
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
    let greet = this.HELLO.concat(Separators.COMA).concat(person).concat(Separators.DOT);
    this.response = this.isUpperCase(person) ? greet.toUpperCase() : greet;
  }

  private addUpperCaseNames(upperCaseNames: Group) {

    this.response = this.response.concat(Separators.DOT).concat(Separators.AND.toUpperCase())

    this.response = this.response.concat(this.HELLO.toUpperCase() + " ")
    upperCaseNames.people.forEach(person => {
      if (!upperCaseNames.isFirstMember(person)) {
        this.addSeparator(upperCaseNames, person);
      }
      this.response = this.response.concat(person)
    })
    this.response = this.response.concat("!")
  }

  private addSeparator(group: Group, person: string) {

    this.response = (group.isLastMember(person) && (person.includes('"') || !person.includes(','))) ? this.response.concat(Separators.AND) :
      this.response.concat(Separators.COMA);
  }

  private formattedPerson(person: string): string {
    if (person.indexOf('"') != -1 && person.indexOf(',') != -1){
      person = person.replace(/"/g, '');
      let subgroup = person.split(',')
      person = subgroup[0].trim().concat(Separators.COMA).concat(subgroup[1].trim())
    }else if (person.indexOf(',') != -1) {
      let subgroup = person.split(',')
      person = subgroup[0].trim().concat(Separators.COMA).concat(Separators.TRIMED_AND).concat(Separators.WHITE_SPACE).concat(subgroup[1].trim());
    }
    return person;
  }

  private isUpperCase(person: string): boolean {
    return person.toUpperCase() === person
  }
}

enum Separators {
  DOT = '.',
  COMA = ", ",
  AND = ' and ',
  TRIMED_AND = 'and',
  WHITE_SPACE = ' '
}

export {
  Greeter
}