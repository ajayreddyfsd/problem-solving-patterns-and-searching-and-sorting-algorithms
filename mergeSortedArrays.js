function mergeSortedArrays(arr1, arr2) {
  let arr = [];

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      arr.push(arr1[i], arr2[j]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }

  if (i === arr1.length && j !== arr2.length) {
    arr.push(...arr2.slice(j));
  }

  if (j === arr2.length && i !== arr1.length) {
    arr.push(...arr1.slice(i));
  }

  return arr;
}

console.log("Basic tests:");
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([1, 2, 6], [3, 4, 5])); // [1, 2, 3, 4, 5, 6]

console.log("\nEmpty arrays:");
console.log(mergeSortedArrays([], [1, 2, 3])); // [1, 2, 3]
console.log(mergeSortedArrays([1, 2, 3], [])); // [1, 2, 3]
console.log(mergeSortedArrays([], [])); // []

console.log("\nDuplicates:");
console.log(mergeSortedArrays([1, 2, 2], [2, 3])); // [1, 2, 2, 2, 3]

console.log("\nNegative numbers:");
console.log(mergeSortedArrays([-3, -1, 0], [-2, 1])); // [-3, -2, -1, 0, 1]

console.log("\nUnequal lengths:");
console.log(mergeSortedArrays([1, 2], [3, 4, 5, 6])); // [1, 2, 3, 4, 5, 6]
console.log(mergeSortedArrays([7, 8, 9], [1])); // [1, 7, 8, 9]

console.log("\nLarge numbers:");
console.log(
  mergeSortedArrays([Number.MAX_SAFE_INTEGER], [Number.MIN_SAFE_INTEGER])
); // [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]

console.log("\nUnsorted input (assumes input is sorted):");
console.log(mergeSortedArrays([3, 1, 2], [4])); // [3, 1, 2, 4] -- NOT sorted!
