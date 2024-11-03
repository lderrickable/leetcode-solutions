/**
 * https://leetcode.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanToIntMap = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let count = 0;
    let total = 0;
    while(count<s.length) {
        let twoCharacterValue = romanToIntMap[s.slice(count, count+2)];
        if(twoCharacterValue != undefined) {
            total = total + twoCharacterValue;
            count = count + 2;
        } else {
            total = total + romanToIntMap[s[count]];
            count++;
        }
    }

    return total;
};

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
console.log(romanToInt('MMCMXXXIV'));