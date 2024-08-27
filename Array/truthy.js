const rawdata = ['', 3, null, 10, undefined, 'hello world', true, false, 'false'];

const truthy = rawdata.filter(item => {
  if (item) {
    return item;
  }
});
console.log(truthy);