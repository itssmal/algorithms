const n = 234

const solve = (n) => {
    let arr = Array.from(n.toString()).map(Number)

    let product = arr.reduce((prev, cur) => prev * cur)
    let sum = arr.reduce((prev, cur) => prev + cur)

    return product - sum
}

console.log(solve(n))
