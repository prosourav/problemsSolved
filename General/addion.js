const data = 12345;

const numbersSum = (param) => {
  const arr = Array.from(param.toString());
  const addition = arr.reduce((acc, item) => parseInt(item, 10) + acc, 0);
  if (addition > 9) {
    return numbersSum(addition);
  }

  return addition;
};

console.log(numbersSum(data));