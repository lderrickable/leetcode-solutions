// https://leetcode.com/problems/median-of-two-sorted-arrays/
var findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    const isOneMedian = (totalLength % 2) === 1;
    const medianIndex = isOneMedian ? Math.ceil(totalLength/2) : totalLength/2;
    let i1 = 0;
    let i2 = 0;
    let count = 0;

    if(totalLength === 0) {
        return undefined;
    }

    while(count < medianIndex-1) {
        if(nums1[i1] == undefined) {
            i2++;
        } else if(nums2[i2] == undefined) {
            i1++;
        } else {
            nums1[i1] < nums2[i2] ? i1++ : i2++;
        }
        count++;
    }
    if(isOneMedian) {
        if(nums2[i2] == undefined) {
            return nums1[i1];
        } else {
            return nums1[i1] != undefined && nums1[i1] < nums2[i2] ? nums1[i1] : nums2[i2];
        }
    } else {
        let first;
        if(nums2[i2] == undefined) {
            first = nums1[i1];
            i1++;
        } else {
            let isOneLess = nums1[i1] != undefined && nums1[i1] < nums2[i2];
            first = isOneLess ? nums1[i1] : nums2[i2];
            isOneLess ? i1++ : i2++;
        }
        let second;
        if(nums2[i2] == undefined) {
            second = nums1[i1];
            i1++
        } else {
            let isOneLess = nums1[i1] != undefined && nums1[i1] < nums2[i2];
            second = isOneLess ? nums1[i1] : nums2[i2];
        }
        return (first+second)/2;
    }
};

console.log(findMedianSortedArrays([1,3], [2]));
console.log(findMedianSortedArrays([1,2], [3,4]));
console.log(findMedianSortedArrays([2], []));
console.log(findMedianSortedArrays([2,3, 6], []));
console.log(findMedianSortedArrays([], [2,3,6,8]));
console.log(findMedianSortedArrays([], [2]));
console.log(findMedianSortedArrays([], []));
console.log(findMedianSortedArrays([1,2,4,7], []));
console.log(findMedianSortedArrays([1,2], []));
