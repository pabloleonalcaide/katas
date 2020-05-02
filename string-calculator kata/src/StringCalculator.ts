
export class StringCalculator {
  defaultDelimiter = ",";
  add(numbers: string): number{
    
    if(numbers.length == 0){
      return 0
    }
    let stringArray = this.formatStringArray(numbers)
    const numberArray = stringArray.map(Number)
    return numberArray.reduce((prev, current) => prev + current );       
  }

  private formatStringArray(numbers: string) {
    let delimiter = this.checkDelimiter(numbers);
    numbers = numbers.startsWith("//") ? numbers.substring(4) : numbers;
    numbers = numbers.replace(/(\n)/gm,delimiter);
    return numbers.split(delimiter);

  }
  private checkDelimiter(numbers: string): string{
    if(!numbers.startsWith("//"))
      return this.defaultDelimiter;
    return numbers.substring(2,3)
  }
}