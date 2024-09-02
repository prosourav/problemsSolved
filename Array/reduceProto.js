Array.prototype.customeReduce = function (cb, initialValue) {
  let accumulator = initialValue;

  for (let x of this) {
    accumulator = cb(accumulator, x);
  }

  return accumulator;
};

const result = [2, 4, 9, 6].customeReduce((acc,cur) => acc * cur, 10);

console.log(result);