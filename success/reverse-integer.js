let upperLimit = 2147483647;
let lowerLimit = -2147483648;

/**
 * https://leetcode.com/problems/reverse-integer/
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = x<0;
    let string = x.toString();
    if(isNegative) {
        string = string.slice(1, string.length);
    }

    let answer = "";
    for(let i=0; i<string.length; i++) {
        answer = string[i] + answer;
    }

    if(isNegative) {
        answer = '-' + answer;
    }

    answer = parseInt(answer, 10);

    if(answer > upperLimit || answer < lowerLimit) {
        return 0;
    }

    return answer;
};

console.log(reverse(123));
console.log(reverse(-123432));
console.log(reverse(0));
console.log(reverse(2147483647));
console.log(reverse(-2147483647));
console.log(reverse(-2147483641));
console.log(reverse(120));
console.log(reverse(-120));
console.log(reverse(-1200000000000));