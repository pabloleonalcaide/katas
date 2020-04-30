import {StringCalculator} from '../src/StringCalculator';

describe('StringCalculator Add method', () =>{
   const stringCalculator = new StringCalculator();
  it('should return 0 if string is empty', () => {
    expect(stringCalculator.add("")).toBe(0);
  })

  it('should return itself if string has only a number', () => {
    expect(stringCalculator.add("1")).toBe(1);
    })

    it('should return the the sum of two number', () => {
      expect(stringCalculator.add("1,2")).toBe(3);
    })

    it('should allow the sum of unknown amount of numbers', () => {
      expect(stringCalculator.add("1,2,3,4")).toBe(10);
    })

    it('should allow new lines between two numbes', () => {
      expect(stringCalculator.add("1,2\n3,4")).toBe(10);
    })
})