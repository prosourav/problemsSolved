const data = {
  name: 'john',
  title: 'doe',
  age: 22,
  city: 'kolkata'
};

 for(x in data){
  if(data[x]==='kolkata'){
    data[x] = 'Hyderabad';
  }
 };

 console.log(data);