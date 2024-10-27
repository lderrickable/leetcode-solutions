/**
 * https://leetcode.com/problems/integer-to-roman/
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let s = num.toString();
    let answer = '';

    for(let i=s.length; i>0; i--) {
        let intValue;
        switch(i) {
            case 4:
                intValue = Math.floor(num/1000);
                num = num-(intValue*1000);
                while(intValue-- > 0) {
                    answer = answer + 'M';
                }
                break;
            case 3:
                intValue = Math.floor(num/100);
                num = num-(intValue*100);
                answer = answer + digitToRoman(intValue, 'M', 'D', 'C');
                break;
            case 2:
                intValue = Math.floor(num/10);
                num = num-(intValue*10);
                answer = answer + digitToRoman(intValue, 'C', 'L', 'X');
                break;
            case 1:
                intValue = Math.floor(num/1);
                answer = answer + digitToRoman(intValue, 'X', 'V', 'I');
                break;
        }

    }
    return answer;
};

function digitToRoman(digit, fullRoman, halfRoman, singleRoman) {
    let answer = '';
    if(digit === 4) {
        answer = answer + singleRoman + halfRoman;
    } else if(digit === 9) {
        answer = answer + singleRoman + fullRoman;
    } else if(digit > 4) {
        answer = answer + halfRoman;
        digit = digit - 5;
        while(digit-- > 0) {
            answer = answer + singleRoman;
        }
    } else {
        while(digit-- > 0) {
            answer = answer + singleRoman;
        }
    }

    return answer;
}

console.log(intToRoman(3749));
console.log(intToRoman(58));
console.log(intToRoman(1994));
console.log(intToRoman(1));
console.log(intToRoman(3999));
console.log(intToRoman(1000));
console.log(intToRoman(589));