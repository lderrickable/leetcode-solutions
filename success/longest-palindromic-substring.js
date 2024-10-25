import { isPalindrome } from "../utils/helpful-functions.js";

/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let charArrayMap = {};
    let currentLongestPalindrome = '';

    if(s.length > 0) {
        currentLongestPalindrome = s[0];
    }

    for(let i=0; i<s.length; i++) {
        if(charArrayMap[s[i]]) {
            charArrayMap[s[i]].forEach(pi => {
                if(i-pi+1 > currentLongestPalindrome.length && isPalindrome(s.slice(pi,i+1))) {
                    currentLongestPalindrome = s.slice(pi, i+1);
                }
            });
            charArrayMap[s[i]].push(i);
        } else {
            charArrayMap[s[i]] = [i];
        }
    }

    return currentLongestPalindrome;
};

console.log(longestPalindrome('psaspp'));
console.log(longestPalindrome('010'));
console.log(longestPalindrome('s'));
console.log(longestPalindrome('ss'));
console.log(longestPalindrome('sss'));
console.log(longestPalindrome('asdfdsasdfds'));
console.log(longestPalindrome('asdfqwerrtyu'));