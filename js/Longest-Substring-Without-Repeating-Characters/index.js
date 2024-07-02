/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let n = s.length;
  let maxLength = 0;
  let left = 0;
  const indexMap = new Map();

  for (let right = 0; right < n; right++) {
    if (indexMap.has(s[right])) {
      left = Math.max(indexMap.get(s[right]) + 1, left);
    }

    indexMap.set(s[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
