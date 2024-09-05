const obj = {a: 1, b: 2, c: 3, d: 4};

let increaseValue = 2;
for( x in obj) {
  obj[x] = obj[x] * increaseValue;
  increaseValue++;
}

console.log(obj);