/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  let result = 0;
  while (x !== 0) {
    let digit = x % 10;
    x = parseInt(x / 10);

    if (
      result > parseInt(INT_MAX / 10) ||
      (result === parseInt(INT_MAX / 10) && digit > 7)
    ) {
      return 0;
    }
    if (
      result < parseInt(INT_MIN / 10) ||
      (result === parseInt(INT_MIN / 10) && digit < -8)
    ) {
      return 0;
    }

    result = result * 10 + digit;
  }

  return result;
}
