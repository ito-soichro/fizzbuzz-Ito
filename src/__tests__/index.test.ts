import { fizzbuzz } from '../index';
import { printOneToHundred } from '../index';
describe('1から100を出力', () => {
  test('FizzBuzz must be output when it is a multiple of 15.', () => {
    expect(fizzbuzz(15)).toBe('Fizz Buzz');
    expect(fizzbuzz(30)).toBe('Fizz Buzz');
    expect(fizzbuzz(45)).toBe('Fizz Buzz');
    expect(fizzbuzz(60)).toBe('Fizz Buzz');
    expect(fizzbuzz(75)).toBe('Fizz Buzz');
    expect(fizzbuzz(90)).toBe('Fizz Buzz');
  });
  test('Buzz must be output when it is a multiple of 5.', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
    expect(fizzbuzz(10)).toBe('Buzz');
    expect(fizzbuzz(20)).toBe('Buzz');
    expect(fizzbuzz(25)).toBe('Buzz');
    expect(fizzbuzz(35)).toBe('Buzz');
    expect(fizzbuzz(40)).toBe('Buzz');
    expect(fizzbuzz(50)).toBe('Buzz');
    expect(fizzbuzz(55)).toBe('Buzz');
    expect(fizzbuzz(65)).toBe('Buzz');
    expect(fizzbuzz(70)).toBe('Buzz');
    expect(fizzbuzz(80)).toBe('Buzz');
    expect(fizzbuzz(85)).toBe('Buzz');
    expect(fizzbuzz(95)).toBe('Buzz');
    expect(fizzbuzz(100)).toBe('Buzz');
});
  test('Fizz must be output when it is a multiple of 3.', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
    expect(fizzbuzz(6)).toBe('Fizz');
    expect(fizzbuzz(9)).toBe('Fizz');
    expect(fizzbuzz(12)).toBe('Fizz');
    expect(fizzbuzz(18)).toBe('Fizz');
    expect(fizzbuzz(21)).toBe('Fizz');
    expect(fizzbuzz(24)).toBe('Fizz');
    expect(fizzbuzz(27)).toBe('Fizz');
    expect(fizzbuzz(33)).toBe('Fizz');
    expect(fizzbuzz(36)).toBe('Fizz');
    expect(fizzbuzz(39)).toBe('Fizz');
    expect(fizzbuzz(42)).toBe('Fizz');
    expect(fizzbuzz(48)).toBe('Fizz');
    expect(fizzbuzz(51)).toBe('Fizz');
    expect(fizzbuzz(54)).toBe('Fizz');
    expect(fizzbuzz(57)).toBe('Fizz');
    expect(fizzbuzz(63)).toBe('Fizz');
    expect(fizzbuzz(66)).toBe('Fizz');
    expect(fizzbuzz(69)).toBe('Fizz');
    expect(fizzbuzz(72)).toBe('Fizz');
    expect(fizzbuzz(78)).toBe('Fizz');
    expect(fizzbuzz(81)).toBe('Fizz');
    expect(fizzbuzz(84)).toBe('Fizz');
    expect(fizzbuzz(87)).toBe('Fizz');
    expect(fizzbuzz(93)).toBe('Fizz');
    expect(fizzbuzz(96)).toBe('Fizz');
    expect(fizzbuzz(99)).toBe('Fizz');
  });

  test('Expected value should be output', () => {
    const checkFizzBuzz = "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,Fizz Buzz,16,17,Fizz,19,Buzz,Fizz,22,23,Fizz,Buzz,26,Fizz,28,29,Fizz Buzz,31,32,Fizz,34,Buzz,Fizz,37,38,Fizz,Buzz,41,Fizz,43,44,Fizz Buzz,46,47,Fizz,49,Buzz,Fizz,52,53,Fizz,Buzz,56,Fizz,58,59,Fizz Buzz,61,62,Fizz,64,Buzz,Fizz,67,68,Fizz,Buzz,71,Fizz,73,74,Fizz Buzz,76,77,Fizz,79,Buzz,Fizz,82,83,Fizz,Buzz,86,Fizz,88,89,Fizz Buzz,91,92,Fizz,94,Buzz,Fizz,97,98,Fizz,Buzz"
    const result = printOneToHundred()
    expect(result.slice(0, -1)).toBe(checkFizzBuzz);
  }); 
});