Array.prototype.customMap = function(cb) {
  const result = [];
  for (let x of this) {
    result.push(cb(x));
  }
  return result;
};

console.log([1, 2, 3].customMap((x) => x * 2));
