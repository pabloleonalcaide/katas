
export class StringCalculator {

  add(numbers: string): number{
    if(numbers.length == 0){
      return 0
    }
    numbers = numbers.replace(/(\n)/gm,",")
    const stringArray = numbers.split(",");
    const numberArray = stringArray.map(Number)
    return numberArray.reduce(function(prev, current){
      return prev + current;
    })    
    
  }
}