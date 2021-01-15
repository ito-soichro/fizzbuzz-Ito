import  conversionToFizzBuzz  from '../src/conversionToFizzBuzz';

const printOneToHundred = () => {
  const arr: Array< string > = [];
    for(let i = 1; i <= 100; i++){
      arr.push(conversionToFizzBuzz(i))
    }
  const result: string = arr.join();
  return result;
}

export default printOneToHundred;


