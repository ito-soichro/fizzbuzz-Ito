import  conversionToFizzBuzz  from '../src/conversionToFizzBuzz';
import  printOneToHundred  from'../src/printOneToHundred';

describe('Depending on the condition, "Fizz", "Buzz", "FizzBuzz" or a number is output between 1 and 100.', () => {
  
  test.each`
  number | expected
  ${[15, 30 ,45]} | ${"Fizz Buzz"}
  ${[5, 10, 100]} | ${"Buzz"}
  ${[3, 6, 99]} | ${"Fizz"}
`("$expected must be output when it is a multiple of $number.", ({ number:number, expected } : {number:number[], expected: number}) => {
    number.forEach(number => {
      expect(conversionToFizzBuzz(number)).toBe(expected);
    });
  });

  test('Expected value should be output', () => {
    const checkFizzBuzz = "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,Fizz Buzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,Fizz Buzz,31,32,Fizz,34,Buzz,Fizz,37,38,Fizz,Buzz,41,Fizz,43,44,Fizz Buzz,46,47,Fizz,49,Buzz,Fizz,52,53,Fizz,Buzz,56,Fizz,58,59,Fizz Buzz,61,62,Fizz,64,Buzz,Fizz,67,68,Fizz,Buzz,71,Fizz,73,74,Fizz Buzz,76,77,Fizz,79,Buzz,Fizz,82,83,Fizz,Buzz,86,Fizz,88,89,Fizz Buzz,91,92,Fizz,94,Buzz,Fizz,97,98,Fizz,Buzz"
    const result =  printOneToHundred()
    expect(result).toBe(checkFizzBuzz);
  }); 
});