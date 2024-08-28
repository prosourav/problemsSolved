const data = {
  module: [{ name: "pachu" }, { name: "gupi" }],
  action: [
    { name: "sourav", age: 25, parent: "gupi" },
    { name: "swarup", age: 35, parent: "gupi" },
    { name: "avi", age: 25, parent: "pachu" },
  ],
};


const processedData = data.action.reduce((acc, cur) => {
  if (acc[cur.parent]) {
    acc[cur.parent].push(cur);
  } else {
    acc[cur.parent] = [cur];
  }
  return acc;
}, {});

const result = data.module.map((item) => {
  const newData = { ...item, ['child']: processedData[item.name] }
  return newData;
});




console.log(result);