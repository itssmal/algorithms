const nums = [1,2,3,3]

// 6 minutes
const solve = (nums) => {
    let res

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j] && i !== j) {
                res = nums[i]
            }
        }
    }

    return res
}

