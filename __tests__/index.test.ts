import  conversionToFizzBuzz  from '../src/conversionToFizzBuzz';
import  printOneToHundred  from'../src/printOneToHundred';

describe('Depending on the condition, "Fizz", "Buzz", "FizzBuzz" or a number is output between 1 and 100.', () => {
  
  test('FizzBuzz must be output when it is a multiple of 15.', () => {
    [15, 45, 90].forEach(number => {
      expect(conversionToFizzBuzz(number)).toBe('Fizz Buzz');
    });
    [3, 10, 85].forEach(number => {
      expect(conversionToFizzBuzz(number)).not.toBe('Fizz Buzz');
    });
  });
  test('Buzz must be output when it is a multiple of 5.', () => {
    [5, 10, 100].forEach(number => {
      expect(conversionToFizzBuzz(number)).toBe('Buzz');
    });
    [3, 15, 90].forEach(number => {
      expect(conversionToFizzBuzz(number)).not.toBe('Buzz');
    });
});
  test('Fizz must be output when it is a multiple of 3.', () => {
    [3, 6, 99].forEach(number => {
      expect(conversionToFizzBuzz(number)).toBe('Fizz');
    });
    [5, 15, 90].forEach(number => {
      expect(conversionToFizzBuzz(number)).not.toBe('Fizz');
    });
  });

  test('Expected value should be output', () => {
    const checkFizzBuzz = printOneToHundred().slice();
    const result =  printOneToHundred()
    expect(result).toBe(checkFizzBuzz);
  }); 
});