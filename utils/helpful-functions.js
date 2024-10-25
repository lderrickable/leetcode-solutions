
/**
 * Is the given string a palindrome?
 * @param {*} s 
 * @returns 
 */
export function isPalindrome(s) {
    const totalLength = s.length;
    const indexOffset = (totalLength % 2);
    let stepsNeeded = totalLength/2;
    if(indexOffset === 1) {
        stepsNeeded = Math.floor(stepsNeeded);
    }
    for(let i=0;i<stepsNeeded;i++) {
        if(s[stepsNeeded-i-1] !== s[totalLength-stepsNeeded+i]) {
            return false;
        }
    }

    return true;
}
