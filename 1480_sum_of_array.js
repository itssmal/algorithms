let nums = [1,2,3,4]

// 64ms
const sum = (nums) => {
    nums.reduce((a, c, i ,arr) => arr[i] += a)
    return nums
}

//64ms
const sum1 = (nums) => {
    let res = []
    nums.forEach((el, idx) => {
        res.push(el + (res[idx - 1] | 0) )
    })
    return res
}

