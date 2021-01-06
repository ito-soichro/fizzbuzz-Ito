import { printOneToHundred } from '../index';

let num: number;
let count: number = printOneToHundred(); 

describe('1から100を出力', () => {
  test('count 1 to 100', () => {
    for( num = 1; num <= 100; num++){
      if(num === 101){
        expect(count).toBe(num);
      }
    }
  });
});
