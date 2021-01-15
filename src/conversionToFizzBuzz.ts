
const conversionToFizzBuzz = (num:number):string =>  {
  if(num % 15 === 0) return 'Fizz Buzz';
  if(num % 5 === 0) return 'Buzz';
  if(num % 3 === 0) return 'Fizz';
  return num.toString();
}

export default conversionToFizzBuzz;