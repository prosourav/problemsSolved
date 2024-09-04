// { a: 1, b: 2, c: 3, d: 2, e: 1 } -> op[1, 2];

const obj = { a: 1, b: 2, c: 3, d: 2, e: 1 };


(function findDuplicate(param) {
  const arrayOfDuplicates = [];
  const duplicates = [];

  for (x in param) {
    if (arrayOfDuplicates.includes(param[x])) {
      duplicates.push({[x]: param[x]});
    } else {
      arrayOfDuplicates.push(param[x]);
    }

  }
  console.log(duplicates);
})(obj);
