/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let parensMap = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    let validityTracker = [];
    for(let i=0; i<s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            validityTracker.push(s[i]);
        } else if (parensMap[s[i]] !== validityTracker.pop()) {
            return false;
        }
    }

    if(validityTracker.length > 0){
        return false;
    }

    return true;
};

console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([])'));
console.log(isValid('({[]}})'));
console.log(isValid('({[]})'));
console.log(isValid('({[]}{}[()[]])'));
console.log(isValid('('));
console.log(isValid('(('));
console.log(isValid('(({{{{'));
