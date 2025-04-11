function getDigit(num, place) {
  num = Math.abs(num);
  let remainder = num % 10 ** (place + 1);
  let quotient = Math.floor(remainder / 10 ** place);
  return quotient;
}

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

function radixSort(arr) {
  let maxNumberOfDigits = maxDigitCount(arr);

  for (let i = 0; i < maxNumberOfDigits; i++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (let num of arr) {
      buckets[getDigit(num, i)].push(num);
    }

    arr = [].concat(...buckets);
  }
  return arr;
}
