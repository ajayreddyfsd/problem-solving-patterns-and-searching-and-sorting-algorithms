function digitCount(num) {
  if (num === 0) {
    return 1;
  }
  if (num < 0) {
    num = Math.abs(num);
  }
  return Math.floor(Math.log10(num)) + 1;
}
