import {
  NoNegativeNumbersAllowed
} from "./NoNegativeNumbersAllowed";

export class StringCalculator {

  private defaultDelimiter = ",";

  public add(numbers: string): number {

    if (numbers.length == 0)
      return 0

    const numberArray = this.extractNumbers(numbers);
    this.ensureValidNumbers(numberArray);
    return numberArray.reduce((prev, current) => {
      current = current > 1000 ? 0 : current;
      return prev + current
    });
  }

  private extractNumbers(numbersString: string): number[] {
    let delimiter: string;
    let stringArray: string[];
    if (numbersString.indexOf("[") == -1) {
      delimiter = this.checkDelimiter(numbersString);

    } else {
      const stringDelimiters = numbersString.substring(numbersString.indexOf("["), numbersString.indexOf("\n"))
        .replace(/\[/g, "").replace(/\]/g, "0");
      const delimiters = stringDelimiters.split("0").filter(Boolean);
      delimiters.forEach(delimiter => {
        numbersString = numbersString.split(delimiter).join(this.defaultDelimiter)
      })
      delimiter = this.defaultDelimiter;

    }
    numbersString = numbersString.startsWith("//") ? numbersString.substring(numbersString.indexOf("\n")) : numbersString;
    numbersString = numbersString.replace(/(\n)/gm, delimiter);
    stringArray = numbersString.split(delimiter);

    return stringArray.map(Number);
  }

  private checkDelimiter(numbersString: string): string {
    if (!numbersString.startsWith("//"))
      return this.defaultDelimiter;
    return numbersString.substring(2, 3)
  }

  private ensureValidNumbers(numbers: Number[]): void {
    let errors = [];
    numbers.forEach(number => {
      if (number < 0)
        errors.push(number.toString());
    })
    if (errors.length > 0)
      throw new NoNegativeNumbersAllowed("No Negative Numbers Allowed, received: " + errors.toString())
  }

}