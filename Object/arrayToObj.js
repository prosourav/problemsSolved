const arr = [['user', 'john'], ['age', 43]];


const arrayToObj = () => {
  return arr.reduce((acc,cur) => {
    acc[cur[0]] = cur[1];
    return acc;
  },{})

};


console.log(arrayToObj());