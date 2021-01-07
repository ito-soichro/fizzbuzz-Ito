import { printOneToHundred } from '../index';

const spyLog = jest.spyOn(console, 'log')
printOneToHundred()

const arg = spyLog.mock.calls.map((arr) => arr[0])
const arr = Array.from(Array(100).keys()).map((i) => i+1);

describe('1から100を出力', () => {
  test('count 1 to 100', () => {
    expect(spyLog.mock.calls.every((arg) => arg.length === 1)).toBeTruthy()
    expect(arg).toEqual(arr)

    spyLog.mockReset()
    spyLog.mockRestore()
  });
});