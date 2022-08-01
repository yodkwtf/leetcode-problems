class Solution:
    def twoSum(self, nums, target):
      compliments = {}  # hash map to store compliments

      # loop over the indices of given list
      for i in range(0, len(nums)):
          # if current item is in map, it means it's a compliment of some prev item
          if nums[i] in compliments:
              # return indices of both curr & compliment item
              return [compliments[nums[i]], i]
          # else put the compliment of cur item in map in the format below
          # {compliment_of_cur: index_of_cur}
          else:
              compliments[target - nums[i]] = i
        