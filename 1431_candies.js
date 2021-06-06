const candies = [2,3,5,1,3]
const extraCandies = 3

const solve = (candies, extraCandies) => {
    return candies.map(el => el + extraCandies >= Math.max(...candies))
}

console.log(solve(candies, extraCandies))
