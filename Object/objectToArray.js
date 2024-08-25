const myObj = { a: 1, b: 2, c: 3 };

const newObj = Object.entries(myObj).map(item => {
  newItem = [...item];
  newItem[1] = item[1] * 2;
  return newItem;
});
console.log(newObj);