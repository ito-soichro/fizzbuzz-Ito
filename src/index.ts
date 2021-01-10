
export function fizzBuzz() {
  let arr:Array< string | number > = [];
  for( let num: number = 1; num <= 100; num++){
    if(num % 3 == 0 && num % 5 == 0){
        arr.push('Fizz Buzz');
      } else if(num % 5 == 0){
        arr.push('Buzz');
      } else if(num % 3 == 0 ){
        arr.push('Fizz');
      }else{
        arr.push(num);
    }
  }
  return arr;
}

const result = fizzBuzz().toString()
console.log(result);



