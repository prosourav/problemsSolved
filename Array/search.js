// const arr = [{ name: 'akshay', age: 22 }, { name: 'ritesh', age: 24 }, { name: 'chanchal', age: 20 }];

// const findIndex = (param) => {
//   return arr.findIndex((value) => JSON.stringify(value) === JSON.stringify(param));
// };

// console.log(findIndex({ name: 'ritesh', age: 24 }));

// const names = ['akash', 'ritesh', 'chanchal', 'tanmoy', 'ritesh'];

// const filterdata = (data) => {
//    return data.reduce((acc, cur) =>  {
//     if(!acc.includes(cur)){
//       acc.push(cur);
//     }
//     return acc;
//    },[]);
// };


// console.log(filterdata(names));


const removeDuplicates = (arr) => {
  return arr.reduce((acc, current) => {
    const x = acc.find(item => item.id === current.id);
    if (!x) {
      acc.push(current);
    }
    return acc;
  }, []);
};

console.log(removeDuplicates(people));
