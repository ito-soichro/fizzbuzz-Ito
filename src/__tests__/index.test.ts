import { printOneToHundred } from '../index';

const spyLog = jest.spyOn(console, 'log')
const array = spyLog.mock.calls
const array3 = spyLog.mock.calls.map((arr) => arr[0])

printOneToHundred()

describe('1から100を出力', () => {
  test('count 1 to 100', () => {
    
    expect(array).toHaveLength(100)
    expect(array[0][0]).toBe(1)
    expect(array[array.length-1][0]).toBe(100)
    expect(typeof array).toEqual('object')
    expect(array3.every((arg) => Number.isInteger(arg))).toBeTruthy()
    expect(array3).toEqual(array3.slice().sort((a, b) => a - b))

    spyLog.mockReset()
    spyLog.mockRestore()
  });
});
