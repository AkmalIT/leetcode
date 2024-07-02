/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
  const m = num1.length;
  const n = num2.length;
  const result = new Array(m + n).fill(0);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let mul = (num1[i] - "0") * (num2[j] - "0");
      let sum = mul + result[i + j + 1];
      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }

  let startIndex = 0;
  while (startIndex < result.length && result[startIndex] === 0) {
    startIndex++;
  }

  if (startIndex === result.length) {
    return "0";
  }

  return result.slice(startIndex).join("");
}
