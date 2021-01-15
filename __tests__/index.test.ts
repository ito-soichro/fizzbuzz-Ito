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
    const checkFizzBuzz = "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,Fizz Buzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,Fizz Buzz,31,32,Fizz,34,Buzz,Fizz,37,38,Fizz,Buzz,41,Fizz,43,44,Fizz Buzz,46,47,Fizz,49,Buzz,Fizz,52,53,Fizz,Buzz,56,Fizz,58,59,Fizz Buzz,61,62,Fizz,64,Buzz,Fizz,67,68,Fizz,Buzz,71,Fizz,73,74,Fizz Buzz,76,77,Fizz,79,Buzz,Fizz,82,83,Fizz,Buzz,86,Fizz,88,89,Fizz Buzz,91,92,Fizz,94,Buzz,Fizz,97,98,Fizz,Buzz"
    const result =  printOneToHundred()
    expect(result).toBe(checkFizzBuzz);
  }); 
});