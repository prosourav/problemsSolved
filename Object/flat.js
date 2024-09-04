const obj = { a: { b: 1, c: 2 }, d: { e: 3, f: 4 } };


function flattenObject(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, key) => {
    const pre = prefix.length ? prefix + '.' : '';

    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      Object.assign(acc, flattenObject(obj[key], pre + key));
    } else {
      acc[pre + key] = obj[key];
    }

    return acc;
  }, {});
}

const flattenedObj = flattenObject(obj);
console.log(flattenedObj);