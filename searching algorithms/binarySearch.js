function x(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (start <= end) {
    if (arr[middle] === target) {
      return middle;
    } else if (target > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }

    middle = Math.floor((start + end) / 2);
  }

  return -1;
}

console.log(x([1, 2, 3, 4, 5], 3)); // ➞ 2
console.log(x([1, 2, 3, 4, 5], 6)); // ➞ -1
console.log(x([10, 20, 30, 40, 50], 10)); // ➞ 0
console.log(x([10, 20, 30, 40, 50], 50)); // ➞ 4
console.log(x([], 1)); // ➞ -1
