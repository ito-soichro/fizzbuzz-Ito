import { printOneToHundred } from '../index';

const spyLog = jest.spyOn(console, 'log')
const array = spyLog.mock.calls
printOneToHundred()


describe('1から100を出力', () => {
  test('count 1 to 100', () => {
    
    expect(array).toHaveLength(100)
    expect(array[0][0]).toBe(1)
    expect(array[array.length-1][0]).toBe(100)

    spyLog.mockReset()
    spyLog.mockRestore()
  });
});
