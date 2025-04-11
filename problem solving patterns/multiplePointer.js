function x(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let sum = arr[start] + arr[end];

    if (sum === target) {
      return [arr[start], arr[end]];
    } else if (sum < target) {
      start = start + 1;
    } else {
      end = end - 1;
    }
  }

  return false;
}
