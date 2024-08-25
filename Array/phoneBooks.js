const users = ["akash", "shibham", "tanmoy", "trisha", "rekha", 'sreaya'];


const phoneBook = users.reduce((acc, user) => {
  acc[user[0].toLocaleUpperCase()] ?
    acc[user[0].toLocaleUpperCase()].push(user) :
    acc[user[0].toLocaleUpperCase()] = [user];
  return acc;
}, {});

console.log(phoneBook);