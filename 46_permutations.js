const nums = [5,4,6,2]

function solve(nums) {
    let res = []

    if (nums.length === 1) return nums

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1; j++) {
            let t = nums[j+1]
            nums[j+1] = nums[j]
            nums[j] = t
            res.push([...nums])
        }
    }

    return res
}

console.log('call', solve(nums))
