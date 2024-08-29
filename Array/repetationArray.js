const processData = (param) => {
  const array = param.flat();
  const obj = {};

  for (x of array) {
    obj[x] = (obj[x] || 0) + 1;
  };

  return Object.keys(obj).filter(key => obj[key] === 1).map(key => Number(key));
};


const arr = [[4, 2, 1,], [7, 4, 8,], [3, 9, 5]];

const result = processData(arr);

console.log(result);