export class NoNegativeNumbersAllowed extends Error {
  constructor(msg: string){
    super(msg);
  }
}