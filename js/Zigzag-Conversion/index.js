/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
  if (numRows === 1) return s;

  const rows = Math.min(numRows, s.length);
  const result = Array.from({ length: rows }, () => "");
  let currRow = 0;
  let goingDown = false;

  for (let i = 0; i < s.length; i++) {
    result[currRow] += s[i];
    if (currRow === 0 || currRow === numRows - 1) {
      goingDown = !goingDown;
    }
    currRow += goingDown ? 1 : -1;
  }

  return result.join("");
}
