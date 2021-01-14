export const printFizzBuzz = (num:any) =>  {
  let fizzbuzz: any;
  if(num % 15 === 0 ){
    return fizzbuzz = 'Fizz Buzz';
  }
  if(num % 5 === 0) {
    return fizzbuzz = 'Buzz';
  }
  if(num % 3 === 0) {
    return fizzbuzz = 'Fizz';
  }
  if(num % 15 != 0 && num % 5 != 0 && num % 3 != 0  ){
    return fizzbuzz = num;
  }  
}

export const printOneToHundred = () => {
  const arr: Array< number | string > = [];
  for(let i = 1; i <= 100; i++){
    arr.push(printFizzBuzz(i))
  }
  return arr;
}

export const printResult = () => {
  const result: string = printOneToHundred().join();
  return result;
}

console.log(printResult())
