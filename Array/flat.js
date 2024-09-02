const data = [1, [2, [3, [4]], 5]];


const flattenArray = function (param) {
  const result = [];

  param.forEach((data) => {
    if (Array.isArray(data)) {
      const flatted = flattenArray(data);
      result.push(...flatted);
    } else {
      result.push(data);
    }
  });
  return result;
};


// 1

// 2

// 3

// 4

// [4]
// [3,4]
// [2,3,4]
// [2,3,4,5];
// [1,[2,3,4,5]]


console.log(flattenArray(data));