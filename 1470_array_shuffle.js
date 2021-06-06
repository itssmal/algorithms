const nums = [2,5,1,3,4,7]
const n = 3

// my solution
const solve = (nums, n) => {
    let x = nums.slice(0, n)
    let y = nums.slice(n)
    let res = []

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 !== 0) {
            res.push(y.shift())
        } else res.push(x.shift())
    }

    return res
}

// other solution

const solve1 = (nums, n) => {
    let res = []

    for (let i = 0; i < n; i++) {
        res.push(nums[i], nums[i+n])
    }

    return res
}

console.log(solve1(nums, n));
console.log(solve(nums, n));
