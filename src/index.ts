
export function printFizzBuzz(num: number): string {
  let fb;
  if(num % 15 === 0 ){
    fb = 'Fizz Buzz'
  }else if(num % 5 === 0) {
    fb = 'Buzz'
  }else if(num % 3 === 0) {
    fb = 'Fizz'
  }else{
    fb = num.toString()
  }
  return fb;
}
export function printOneToHundred() {
  let str: string = '';
  for(let i = 1; i <= 100; i++){
    str += `${printFizzBuzz(i)},`;
  }
  let result = str.slice(0, -1);
  return result;
}

console.log(printOneToHundred())