const array = [8, 2, 6, 4, 9];

const findMissingNumbers = (data) => {
  // Sort the array in ascending order
  const sortedArray = data.sort((a, b) => a - b);

  // Find the range of numbers in the array
  const minNumber = sortedArray[0];
  const maxNumber = sortedArray[sortedArray.length - 1];

  // Create an array of all numbers within the range
  const completeArray = Array.from({ length: maxNumber - minNumber + 1 }, (_, i) => minNumber + i);
  console.log(completeArray);

  // Find the missing numbers by comparing the two arrays
  const missingNumbers = completeArray.filter(num => !sortedArray.includes(num));

  return missingNumbers;
};

const missingNumbers = findMissingNumbers(array);
// console.log(missingNumbers); // Output: [3, 5, 7]