const upperLimit = 2147483647;
const lowerLimit = -2147483648;

const validDigitMap = {
    '0': true,
    '1': true,
    '2': true,
    '3': true,
    '4': true,
    '5': true,
    '6': true,
    '7': true,
    '8': true,
    '9': true,
}

/**
 * https://leetcode.com/problems/string-to-integer-atoi/
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trim();
    let isNegative = false;
    if(s[0] === '-' || s[0] === '+') {
        isNegative = s[0] === '-';
        s = s.slice(1,s.length);
    }

    let answer = 0;
    let finalValidIndex = s.length-1;

    if(validDigitMap[s[0]] == undefined) {
        return 0;
    }
    for(let i=0; i<s.length; i++) {
        if(validDigitMap[s[i]] == undefined) {
            finalValidIndex = i-1;
            break;
        }
    }

    answer = (isNegative ? -1 : 1) * parseInt(s.slice(0, finalValidIndex+1), 10);
    if(answer > upperLimit) {
        return upperLimit;
    } else if(answer < lowerLimit) {
        return lowerLimit;
    }

    return answer;
};

console.log(myAtoi('123'));
console.log(myAtoi('-123'));
console.log(myAtoi('-123e'));
console.log(myAtoi('-a123e'));
console.log(myAtoi('-1a23e'));
console.log(myAtoi('-1.99'));
console.log(myAtoi('-199000000000'));
console.log(myAtoi('199000000000'));
console.log(myAtoi('001990'));
console.log(myAtoi('-001990'));
console.log(myAtoi(''));
console.log(myAtoi('a'));
console.log(myAtoi('aab'));
