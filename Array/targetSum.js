const result = twoSum([2, 7, 11, 15], 19); // Output: [0, 1]

function twoSum(nums, target) {
  for (let i = 0; i <= nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}

console.log(result);