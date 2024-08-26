const data = {
  name: 'john',
  title: 'doe',
  age: 22,
  city: 'kolkata'
};

const newKeys = ['Name', 'Title', 'Age', 'City'];

const updatedData = Object.keys(data).reduce((acc, cur, idx) => {
  acc[newKeys[idx]] = data[cur];
  return acc;
},{});

console.log(updatedData);