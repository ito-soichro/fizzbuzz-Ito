import { fizzBuzz } from '../index';

describe('1から100を出力-３の倍数の時fizz-5の倍数の時buzz-３と５の倍数の時fizzBuzz', () => {

  test('check of Array', () => {
    const spyLog = jest.spyOn(console, 'log')
    fizzBuzz()
    const array = spyLog.mock.calls
    expect(array.sort()).toEqual(array.slice().sort())

  spyLog.mockReset()
  spyLog.mockRestore()
});

  test('3multiple-Fizz_5multiple-Buzz_3&5multiple-FizzBuzz', () => {
    const array = fizzBuzz()
    for( let i = 1; i <= 100; i++ ){
      if(i % 3 == 0 && i % 5 == 0){
        expect(array[i-1]).toBe('Fizz Buzz');
      } else if(i % 5 == 0){
        expect(array[i-1]).toBe('Buzz');
      } else if(i % 3 == 0 ){
        expect(array[i-1]).toBe('Fizz');
      }else{
        expect(typeof array[i-1]).toBe('number');
      }
    }
  });
});

