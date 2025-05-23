function pivotHelper(arr, start = 0, end = arr.length - 1) {
  if (arr.length === 0) {
    return -1;
  }

  if (arr.length === 1) {
    return 0;
  }

  let pivot = arr[start];
  let numberOfLessEles = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      numberOfLessEles++;
      [arr[numberOfLessEles], arr[i]] = [arr[i], arr[numberOfLessEles]];
    }
  }

  [arr[start], arr[numberOfLessEles]] = [arr[numberOfLessEles], arr[start]];
  return numberOfLessEles;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotIndex = pivotHelper(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }

  return arr;
}
