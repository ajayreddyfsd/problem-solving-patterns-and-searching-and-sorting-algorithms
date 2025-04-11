function x(arr, k) {
  let start = 0;
  let end = k - 1;
  let sum = 0;
  let maxSum = -Infinity;

  for (let i = start; i <= end; i++) {
    sum = sum + arr[i];
  }

  maxSum = sum;

  while (end < arr.length - 1) {
    sum = sum - arr[start] + arr[end + 1];

    if (sum > maxSum) {
      maxSum = sum;
    }

    start = start + 1;
    end = end + 1;
  }

  return maxSum;
}
