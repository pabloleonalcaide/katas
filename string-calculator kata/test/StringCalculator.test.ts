import {StringCalculator} from '../src/StringCalculator';

describe('StringCalculator Add method', () =>{
   const stringCalculator = new StringCalculator();
  it('should return 0 if string is empty', () => {
    expect(stringCalculator.add("")).toBe(0);
  })

  it('should return itself if string has only a number', () => {
    expect(stringCalculator.add("1")).toBe(1);
  })
})