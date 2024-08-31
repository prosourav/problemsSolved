// length
// loop > Math.floor(length / 2)
// temporary = item;
// loop index element = (length - 1 ) - index;
// (length - 1 ) - index = temporary;
//  check input == output ? true : false;

const input = 121;
const length = input.toString().length;
let outPut = Array.from(String(input));
console.log("#",outPut);

for (let i = 0; i < Math.floor(outPut.length / 2); i++) {
  const temporary = outPut[i];
  outPut[i] = outPut[length - (i + 1)];
  outPut[length - (i + 1)] = temporary;
}

outPut = Number(outPut.join(''));




console.log(outPut === input, outPut, input);