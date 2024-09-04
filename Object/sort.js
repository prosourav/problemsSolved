const ob = { c: 1, a: 2, b: 3 };

const data = Object.keys(ob).sort().reduce((acc, key) =>{
  acc[key] = ob[key];
  return acc;
},{});

console.log(data);
