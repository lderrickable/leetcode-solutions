/**
 * https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let li = 0;
    let ri = height.length - 1;
    let maxArea = 0;

    for(let i=0; i<height.length; i++) {
        let currentArea;
        if(height[li] < height[ri]) {
            currentArea = height[li] * (ri-li);
            li++;
        } else {
            currentArea = height[ri] * (ri-li);
            ri--;
        }
        if(currentArea > maxArea) {
            maxArea = currentArea;
        }
    }

    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));     // 49
console.log(maxArea([1,1]));                   // 1
console.log(maxArea([0,1,0,1]));               // 2
console.log(maxArea([0,1,0,10]));              // 2
console.log(maxArea([5,1,0,10]));              // 15
console.log(maxArea([1,1,2,2,1,2,3,1,1]));     // 8
console.log(maxArea([0,0]));                   // 0
console.log(maxArea([0,0,1]));                 // 0
console.log(maxArea([1,2,3,4,5,6,7,8,9,10]));  // 25
console.log(maxArea([4,2,4,2,6,12,5,4,2,4]));  // 36
console.log(maxArea([8,7,2,1]));               // 7