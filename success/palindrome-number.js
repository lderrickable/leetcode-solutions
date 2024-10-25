/**
 * https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const stringX = x.toString();
    const totalLength = stringX.length;
    const digitOffset = (totalLength % 2);
    let stepsNeeded = totalLength/2;
    if(digitOffset === 1) {
        stepsNeeded = Math.floor(stepsNeeded);
    }
    for(let i=0;i<stepsNeeded;i++) {
        if(stringX[stepsNeeded-i-1] !== stringX[totalLength-stepsNeeded+i]) {
            return false;
        }
    }

    return true;
};

console.log(isPalindrome(333));
console.log(isPalindrome(1234321));
console.log(isPalindrome(12343211));
console.log(isPalindrome(11));
console.log(isPalindrome(132));
console.log(isPalindrome(10));
console.log(isPalindrome(101));
console.log(isPalindrome(0));
console.log(isPalindrome(-121));
console.log(isPalindrome(444444));
console.log(isPalindrome(544445));
console.log(isPalindrome(44445));