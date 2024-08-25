const rawData = {
  name: { name: "akash" },

  age: { name: "tanmoy", age: 23 },

  location: { name: "delhi", age: 25, loaction: "India" },
};


// output: [['akash'], ['tanmoy', '23'], ['delhi', 25, 'India']];
// keys map [name, age, location];
// obj[key] map [name, age, location];


// const processData = (obj) => {
//   return Object.keys(obj).map(item => {
//     return Object.keys(obj[item]).map(childItem => {
//       return obj[item][childItem];
//     });
//   });
// };

function isObject(item) {
  return Object.prototype.toString.call(item) === '[object Object]';
};

const processData = (obj) => {
  return Object.keys(obj).map(item => {
    if (isObject(obj[item]) && obj[item]) {
      return processData(obj[item]);
    }
    return obj[item];
  });
};

console.log(processData(rawData));