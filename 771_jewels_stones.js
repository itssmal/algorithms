const jewels = "aA"
const stones = "aAAbbbb"

// 2min
const solve = (jewels, stones) => {
    let res = 0;

    [...stones].map(stone => {
        [...jewels].map(jewel => {
            res += jewel === stone ? 1 : 0
        })
    })

    return res
}

// mine 2nd version
const solve1 = (jewels, stones) => {
    let count = 0;

    [...stones].map(stone => {
       count += (([...jewels].indexOf(stone) !== -1)) ? 1 : 0
    })

    return count
}

// other solution
const numJewelsInStones = (J, S) => {
    const jewels = new Set(J)
    return S.split('').reduce((res, s) => res + jewels.has(s), 0)
};

console.log(solve1(jewels, stones));
