/**
 * https://leetcode.com/problems/generate-parentheses/
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let answer = [];

    function buildParens(currentString, left, right) {
        if(currentString.length === 2*n) {
            answer.push(currentString);
            return;
        }
        if(left < n) {
            currentString = currentString + "(";
            buildParens(currentString, left+1, right);
            currentString = currentString.slice(0, -1);
        }
        if(right < left) {
            currentString = currentString + ")";
            buildParens(currentString, left, right+1);
        }
    }

    buildParens("", 0, 0);
    return answer;
};



console.log(generateParenthesis(1).length);
console.log(generateParenthesis(2));
console.log(generateParenthesis(3));
console.log(generateParenthesis(4).length); // 14
console.log(generateParenthesis(5).length);
console.log(generateParenthesis(6).length);
console.log(generateParenthesis(7).length);
console.log(generateParenthesis(8).length);