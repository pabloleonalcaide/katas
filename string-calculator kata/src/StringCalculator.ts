import {
  NoNegativeNumbersAllowed
} from "./NoNegativeNumbersAllowed";

export class StringCalculator {

  private defaultDelimiter = ",";
  private CUSTOM_SEPARATOR = "0";

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
    if (numbersString.indexOf("[") == -1) {
      delimiter = this.checkDelimiter(numbersString);

    } else {
      const stringDelimiters = this.extractEncapsulatedSeparators(numbersString);
      const delimiters = stringDelimiters.split(this.CUSTOM_SEPARATOR).filter(Boolean);
      delimiters.forEach(delimiter =>
        numbersString = numbersString.split(delimiter).join(this.defaultDelimiter)
      )
      delimiter = this.defaultDelimiter;

    }
    numbersString = numbersString.startsWith("//") ? numbersString.substring(numbersString.indexOf("\n")) : numbersString;
    numbersString = numbersString.replace(/(\n)/gm, delimiter);
    const stringArray = numbersString.split(delimiter);

    return stringArray.map(Number);
  }

  private extractEncapsulatedSeparators(numbersString: string): string{
    return numbersString.substring(numbersString.indexOf("["), numbersString.indexOf("\n"))
    .replace(/\[/g, "").replace(/\]/g, this.CUSTOM_SEPARATOR);
  }
  private checkDelimiter(numbersString: string): string {
    if (!numbersString.startsWith("//"))
      return this.defaultDelimiter;
    return numbersString.substring(2, 3)
  }

  private ensureValidNumbers(numbers: Number[]): void {
    let errors = numbers.filter(number => number < 0);
    if (errors.length > 0)
      throw new NoNegativeNumbersAllowed("No Negative Numbers Allowed, received: " + errors.toString())
  }

}