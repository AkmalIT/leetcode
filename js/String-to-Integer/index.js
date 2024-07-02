/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);

  s = s.trim();

  if (s.length === 0) {
    return 0;
  }

  let sign = 1;
  let i = 0;
  if (s[i] === "-" || s[i] === "+") {
    if (s[i] === "-") {
      sign = -1;
    }
    i++;
  }

  let result = 0;
  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    result = result * 10 + (s[i] - "0");
    i++;

    if (sign * result < INT_MIN) {
      return INT_MIN;
    }
    if (sign * result > INT_MAX) {
      return INT_MAX;
    }
  }

  return sign * result;
};
