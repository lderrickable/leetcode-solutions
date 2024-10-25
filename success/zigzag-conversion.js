/**
 * https://leetcode.com/problems/zigzag-conversion/
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let directionDown = true;
    let currentRowIndex = 0;
    let rowMap = {};
    for(let i=0; i<numRows; i++) {
        rowMap[i] = '';
    }

    if(numRows === 1) {
        return s;
    }

    for(let i=0; i<s.length; i++) {
        rowMap[currentRowIndex] = rowMap[currentRowIndex] + s[i];
        directionDown ? currentRowIndex++ : currentRowIndex--;

        if(currentRowIndex === numRows-1 || currentRowIndex === 0) {
            directionDown = !directionDown;
        }
    }

    let answer = "";
    for(let i=0; i<numRows; i++) {
        answer = answer + rowMap[i];
    }

    return answer;
};

// console.log(convert("PAYPALISHIRING", 3));
// console.log(convert("PAYPALISHIRING", 4));
// console.log(convert("PAYPALISHIRING", 2));
console.log(convert("PAYPALISHIRING", 1));
console.log(convert("P", 2));
console.log(convert("PAP,.", 2));
console.log(convert("PAP", 2));