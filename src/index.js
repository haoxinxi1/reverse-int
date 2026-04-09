module.exports = function reverse(n) {
  const numberAsString = String(n < 0 ? -n : n);
  const reverseString = numberAsString.split('').reverse().join('');
  return Number(reverseString);
};
