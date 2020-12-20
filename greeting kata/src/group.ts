export class Group {

  people: string[];

  constructor(people: string[]){
    this.people = people;
  }

  public isLastMember(person: string):boolean{
    return this.people[this.people.length -1] === person
  }
  
  public isFirstMember(person: string):boolean{
    return this.people[0] === person
  }
}
