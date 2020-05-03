import { NoNegativeNumbersAllowed } from "./NoNegativeNumbersAllowed";

export class StringCalculator {
  defaultDelimiter = ",";
  add(numbers: string): number{
    
    if(numbers.length == 0){
      return 0
    }
    let stringArray = this.formatStringArray(numbers)
    const numberArray = stringArray.map(Number)
    this.ensureValidNumbers(numberArray);
    return numberArray.reduce((prev, current) =>{
      current = current > 1000 ? 0 : current;
      return prev + current
    });
  }

  private formatStringArray(numbers: string) {
    let delimiter = this.checkDelimiter(numbers);
    numbers = numbers.startsWith("//") ? numbers.substring(4) : numbers;
    numbers = numbers.replace(/(\n)/gm,delimiter);
    return numbers.split(delimiter);

  }
  private checkDelimiter(numbersString: string): string{
    if(!numbersString.startsWith("//"))
      return this.defaultDelimiter;
    return numbersString.substring(2,3)
  }

  private ensureValidNumbers(numbers: Number[]):void{
    let errors = [];
    numbers.forEach(number => {
      if(number < 0)
        errors.push(number.toString());
    })
    if(errors.length > 0)
      throw new NoNegativeNumbersAllowed("No Negative Numbers Allowed, received: " + errors.toString())
      
  }

}