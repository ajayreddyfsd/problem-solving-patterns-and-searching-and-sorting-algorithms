function x(arr) {
  for (let j = 0; j <= arr.length - 1; j++) {
    let minEleIndex = j;
    let minEle = arr[minEleIndex];

    for (let i = j + 1; i <= arr.length - 1; i++) {
      if (arr[i] < minEle) {
        minEleIndex = i;
        minEle = arr[minEleIndex];
      }
    }

    [arr[j], arr[minEleIndex]] = [arr[minEleIndex], arr[j]];
  }

  return arr;
}
