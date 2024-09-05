const obj = { a: 1, b: 2, c: 3, d: 4 };

const filterObj = (param) => {
  for( x in obj ) {
    if(obj[x] >= param){
      console.log(obj[x]);
    }
  };
};

filterObj(4);