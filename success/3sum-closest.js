/**
 * https://leetcode.com/problems/3sum-closest/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b) => a - b);
    let closestSum = null;
    for(let i=0; i<nums.length; i++) {
        let left = i+1;
        let right = nums.length-1;

        if(closestSum === 0) {
            break;
        }

        if(i>0 && nums[i] === nums[i-1]) {
            continue;
        }

        while(left<right) {
            let sum = nums[i] + nums[left] + nums[right];

            if((Math.abs(sum - target) < Math.abs(closestSum-target)) || closestSum == undefined) {
                closestSum = sum;
            }
            
            if(sum - target > 0) {
                while(nums[right] === nums[right-1]) right--;
                right--;
            } else {
                while(nums[left] === nums[left+1]) left++;
                left++;
            }
        }
    }

    return closestSum;
};


// console.log(threeSumClosest([-1,2,1,-4], 1));
// console.log(threeSumClosest([0,0,0], 1));
// console.log(threeSumClosest([-1,0,1,2,3,4], 1));
// console.log(threeSumClosest([-1,0,1,2,3,4], 10));
// console.log(threeSumClosest([-190,44,1,22,300,41], 100));
// console.log(threeSumClosest([-1,-1,-1], -3));
// console.log(threeSumClosest([0,3,97,102,200], 300));
console.log(threeSumClosest([-100,-98,-2,-1], -101));