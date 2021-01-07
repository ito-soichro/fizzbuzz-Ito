import { printOneToHundred } from '../index';

const spyLog = jest.spyOn(console, 'log')
// const array = spyLog.mock.calls

printOneToHundred()

 // 全部を配列に詰め直してみます
 const actual = spyLog.mock.calls.map((arr) => arr[0])

describe('1から100を出力', () => {
  test('count 1 to 100', () => {
    // 要素数は100
    expect(actual).toHaveLength(100)
     // 一意な要素数も100
    expect(Math.max(...actual)).toBe(100)
    // 最小は0
    expect(Math.min(...actual)).toBe(1)
    // 最大は100
    expect(new Set(actual).size).toBe(100)
    // 全部整数
    expect(actual.every((arg) => Number.isInteger(arg))).toBeTruthy()
    // 昇順ソートされている
    expect(actual).toEqual(actual.slice().sort((a, b) => a - b))



    spyLog.mockReset()
    spyLog.mockRestore()
  });
})