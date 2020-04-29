import { stringify } from "querystring";

export class StringCalculator {

  add(numbers: string): number{
    if(numbers.length == 0){
      return 0
    }
    const numbersArray = numbers.split(",");
    return Number.parseInt(numbersArray[0])
  }
}