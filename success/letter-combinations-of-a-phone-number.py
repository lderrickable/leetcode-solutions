# https://leetcode.com/problems/letter-combinations-of-a-phone-number/
class Solution:
    digitLetterMap = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz",
    }
    def letterCombinations(self, digits):
        if digits == "":
            return []
        innerLetterCombinations = ['']
        if len(digits) > 1:
            innerLetterCombinations = self.letterCombinations(digits[1:])
        returnArray = []

        for letter in self.digitLetterMap[digits[0]]:
            for innerLetterCombination in innerLetterCombinations:
                returnArray.append(letter + innerLetterCombination)

        return returnArray
            
solution = Solution()

print(solution.letterCombinations("23"))
print(solution.letterCombinations(""))
print(solution.letterCombinations("2"))
print(solution.letterCombinations("8523"))