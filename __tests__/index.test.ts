import { printFizzBuzz } from '../src/index';
import { printOneToHundred } from'../src/index';
import { printResult } from '../src/index';

describe('Depending on the condition, "Fizz", "Buzz", "FizzBuzz" or a number is output between 1 and 100.', () => {
  
  test.each([
    [15, 90,'Fizz Buzz'],
    [5, 100,'Buzz'],
    [3, 99,'Fizz'],
  ])('FizzBuzz must be output when it is a multiple of 15 and,\n      Buzz must be output when it is a multiple of 5 and, \n      Fizz must be output when it is a multiple of 3.', 
  (test1,test2,result) => {
    expect(printFizzBuzz(test1)).toBe(result);
    expect(printFizzBuzz(test2)).toBe(result);
  });

  test.each([
    [3, 97,'Fizz Buzz'],
    [3, 99,'Buzz'],
    [5, 100,'Fizz'],
    [15, 90,'Buzz'],
    [15, 90,'Fizz'],
  ])('FizzBuzz is not output except in multiples of 15. and,\n      Buzz is not output except in multiples of 5., \n      Fizz is not output except in multiples of 3.', 
  (test1,test2,result) => {
    expect(printFizzBuzz(test1)).not.toBe(result);
    expect(printFizzBuzz(test2)).not.toBe(result);
  });

  test('Expected value should be output', () => {
    const checkFizzBuzz = printOneToHundred().slice().join();
    const result = printResult()
    expect(result).toBe(checkFizzBuzz);
  }); 
});