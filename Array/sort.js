const unsorted = [9, 4, 3, 6, 12, 43, 24, 10];

const sortArray = (param) => {
  for (let i = 0; i < param.length; i++) {
    for (let j = i + 1; j < param.length; j++) {
      if (param[i] > param[j]) {
        const temp = param[i];
        param[i] = param[j];
        param[j] = temp;
      }
    }
  };
  return param;
};

// console.log(sortArray(unsorted));
console.log(unsorted.sort(function (a, b) {
  return a - b;
}));