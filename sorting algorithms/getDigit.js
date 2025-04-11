function getDigit(num, place) {
  num = Math.abs(num);
  let remainder = num % 10 ** (place + 1);
  let quotient = Math.floor(remainder / 10 ** place);
  return quotient;
}

