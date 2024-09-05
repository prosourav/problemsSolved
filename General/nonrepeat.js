const sentence = " I am Sourav, I        am currently working in Web Development".toLowerCase();
const newString = sentence.trim().replace(/\s+/g, ' ');




function firstNonRepeatedCharacter(str) {
  const charData = {};  // Object to store the frequency and first index

  // Traverse the string and store character data
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charData[char]) {
      charData[char].count += 1;
    } else {
      charData[char] = { count: 1, index: i };
    }
  }

  // Iterate over the object and find the first character with count 1
  let firstNonRepeated = null;
  let firstIndex = Infinity;

  for (let key in charData) {
    if (charData[key].count === 1 && charData[key].index < firstIndex) {
      firstNonRepeated = key;
      firstIndex = charData[key].index;
    }
  }

  return firstNonRepeated;
}

// Example usage:
const result = firstNonRepeatedCharacter(sentence);

console.log(result);  // Output: "w"
