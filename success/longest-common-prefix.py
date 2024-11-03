# https://leetcode.com/problems/longest-common-prefix/
class Solution:
    def longestCommonPrefix(self, strs):
        if len(strs) == 0:
            return ""
        referenceString = strs[0]
        for s in range(1,len(strs)):
            while strs[s].find(referenceString) != 0:
                referenceString = referenceString[0:-1]
            if referenceString == "":
                return ""
        return referenceString


solution = Solution()
print(solution.longestCommonPrefix(["flower","flow","flight"]))
print(solution.longestCommonPrefix(["dog","racecar","car"]))
print(solution.longestCommonPrefix(["ab", "a"]))
print(solution.longestCommonPrefix(["ab", ""]))
print(solution.longestCommonPrefix(["ab", "abc"]))