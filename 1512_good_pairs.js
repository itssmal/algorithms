const nums = [1,2,3,1,1,3]

//my solution - 4 mins
const solve = (nums) => {
    let goodPairs = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) {
                goodPairs++
            }
        }
    }

    return goodPairs
}

//other solution
const numIdenticalPairs = function(nums) {
    const map = {}
    let count = 0

    for (const number of nums) {
        if (map[number]) {
            count += map[number];
            map[number] += 1;
        } else {
            map[number] = 1;
        }
    }
    return count
};

solve(nums)
