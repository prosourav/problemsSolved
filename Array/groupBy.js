const users = [
  { name: 'aman', city: 'Delhi' },
  { name: 'akash', city: 'Kolkata' },
  { name: 'ajit', city: 'bombay' },
  { name: 'rajesh', city: 'Delhi' },
  { name: 'sayan', city: 'kolkata' },
  { name: 'jimmy', city: 'bombay' },
];

const groupBy = users.reduce((acc, cur) => {
   if(acc[cur.city]) {
    acc[cur.city] = [...acc[cur.city], cur];
  }
  else{
     acc[cur.city] = [cur]; 
  }
  return acc;
},{});

console.log(groupBy);