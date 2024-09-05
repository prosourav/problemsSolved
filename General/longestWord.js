const sentence = " I am Sourav, I am currently working in Web Development";

const words = sentence.split(" ");

let largestWord='';

for (let i = 0; i < words.length; i++) {
  if (largestWord.length < words[i].length){
    largestWord = words[i];
  }
}

console.log(largestWord);