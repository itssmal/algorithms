const nums = [8,1,2,2,3]

// 2min 20s
const solve = (nums) => {
    let res = []

    for (let i = 0; i < nums.length; i++) {
        let count = 0

        for (let j = 0; j < nums.length; j++) {
            count += (nums[j] < nums[i] && j !== i) ? 1 : 0
        }
        res.push(count)
    }

    return res
}

console.log(solve(nums));
