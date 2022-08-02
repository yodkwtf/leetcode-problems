class Solution:
    def reverseString(self, s):
        """
        Do not return anything, modify s in-place instead.
        """
        for i in range(0, len(s)):
          last_item = s.pop()
          s.insert(i, last_item)
          
          
        