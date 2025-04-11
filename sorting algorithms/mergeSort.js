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

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2); // Fix calculation of mid

  return mergeSortedArrays(
    mergeSort(arr.slice(0, mid)),
    mergeSort(arr.slice(mid))
  );
}
