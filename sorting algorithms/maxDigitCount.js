function digitCount(num) {
  if (num === 0) {
    return 1;
  }
  if (num < 0) {
    num = Math.abs(num);
  }
  return Math.floor(Math.log10(num)) + 1;
}

function maxDigitCount(arr) {
  let maxDigitCount = 0;
  for (let i of arr) {
    if (digitCount(i) > maxDigitCount) {
      maxDigitCount = digitCount(i);
    }
  }
  return maxDigitCount;
}


