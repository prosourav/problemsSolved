const arrOne = [2, 4, 5, 7];
const arrTwo = [9, 4, 1];


const mergeArrays = function(a1, a2) {
  if(a2.length > a1.length){
    const newArray = a2.map((item, idx) => {
      return a1[idx] ? a1[idx] + item : item;
    });
    return newArray;
  }
  const newArray = a1.map((item, idx) => {
    return a2[idx] ? a2[idx] + item : item;
  });
  return newArray;

};

const result = mergeArrays(arrOne, arrTwo);

console.log(result);