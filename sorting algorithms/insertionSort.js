function x(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    let valueToInsert = arr[i];
    for (var j = i - 1; j >= 0; j--) {
      if (valueToInsert >= arr[j]) {
        break;
      } else {
        arr[j + 1] = arr[j];
      }
    }
    arr[j + 1] = valueToInsert;
  }
  return arr;
}
