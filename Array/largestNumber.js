const arr = [8, 2, 4, 33, 43, 51, 12, 6];


const findlargestNumber = (parameter) =>{
  let largestNumber = parameter[0];
  for(let i = 0; i < parameter.length; i++) {
    if(parameter[i] > largestNumber){
      largestNumber = parameter[i];
    }
  }; 
  return largestNumber;
};

console.log(findlargestNumber(arr));