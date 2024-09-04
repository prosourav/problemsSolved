const obj = { a: { b: { c: "value" }, d: 'biman' } };


const isObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]';

function findVAlue(param) {
  return Object.keys(param).map(key => isObject(param[key]) ? findVAlue(param[key]) : param[key]);
}

// const result = findVAlue(obj);

// console.log(result);


function findSpecificValue(obj, param) {
  for (let key in obj) {
    if (key === param) {
      return obj[key];
    }
    if (isObject(obj[key])) {
      const result = findSpecificValue(obj[key], param);
      if (result !== undefined) {
        return result;
      }
    }
  }
  return undefined;
}

const result = findSpecificValue(obj, 'd');
console.log(result); 
