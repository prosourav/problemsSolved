const data = [2, 4, 8, 12, 5, 21, 2, 12, 9];

const result = data.reduce(function (acc, cur) {

  if (cur in acc) {
    acc[cur] = acc[cur] + 1;
  } else {
    acc[cur] = 1;
  };

  return acc;

}, {});

console.log(result);