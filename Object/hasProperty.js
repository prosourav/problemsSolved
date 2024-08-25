((data, prop)=>{
  if(prop in data){
    console.log(prop +" exists");
  }else{
    console.log(prop +" does not exist");
  };
})({name: "tanmoy"}, 'age');
