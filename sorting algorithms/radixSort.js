function getDigit(num, place) {
  num = Math.abs(num);
  let remainder = num % 10 ** (place + 1);
  let quotient = Math.floor(remainder / 10 ** place);
  return quotient;
}

function getNumberOfDigits(num) {
  if (num === 0) {
    return 1;
  }
  if (num < 0) {
    num = Math.abs(num);
  }
  return Math.floor(Math.log10(num)) + 1;
}

function radixSort() {
  const arrays = Array.from({ length: 10 }, () => []);
}
