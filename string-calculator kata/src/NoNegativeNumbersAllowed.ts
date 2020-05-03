export class NoNegativeNumbersAllowed extends Error {
  constructor(msg: string){
    super(msg);
    Object.setPrototypeOf(this, NoNegativeNumbersAllowed.prototype)
  }
}