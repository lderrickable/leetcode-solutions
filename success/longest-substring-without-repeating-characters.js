/**
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let currentMap = {};
    let currentLength = 0;
    let longest = 0;

    for(let i=0; i<s.length; i++) {
        if(currentMap[s[i]] == undefined || currentMap[s[i]] < (i-currentLength)) {
            currentLength++;
        } else {
            if(longest < currentLength) {
                longest = currentLength;
            }
            currentLength = i - currentMap[s[i]];
        }
        currentMap[s[i]] = i;
    }

    return longest > currentLength ? longest : currentLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));