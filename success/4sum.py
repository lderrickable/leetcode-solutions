# https://leetcode.com/problems/4sum/
class Solution(object):
    def fourSum(self, nums, target):
        nums.sort()
        returnArray = []
        for i in range(0, len(nums)-3):
            if i>0 and nums[i] == nums[i-1]:
                continue
            for j in range(i+1, len(nums)-2):
                if j>i+1 and nums[j] == nums[j-1]:
                    continue
                left = j+1
                right = len(nums)-1
                while left < right:
                    sum = nums[i] + nums[j] + nums[left] + nums[right]
                    if nums[i] + nums[j] + nums[left] + nums[right] == target:
                        returnArray.append([nums[i], nums[j], nums[left], nums[right]])
                        while nums[left] == nums[left+1] and left+1<right:
                            left += 1
                        while nums[right] == nums[right-1] and right-1>left:
                            right -= 1
                        left += 1
                        right -= 1
                    elif sum > target:
                        while nums[right] == nums[right-1] and right-1>left:
                            right -= 1
                        right -= 1
                    elif sum < target:
                        while nums[left] == nums[left+1] and left+1<right:
                            left += 1
                        left += 1
        return returnArray

solution = Solution()

print(solution.fourSum([-2, -1, 0, 0, 1, 2], 0))
print(solution.fourSum([2,2,2,2,2], 8))
print(solution.fourSum([0,0,0,0,0,0,0,0,0,0,0,0], 0))
print(solution.fourSum([-1,2,38,201,-293,0,12,-23], 240))
print(solution.fourSum([1,-2,-5,-4,-3,3,3,5], -11))
        