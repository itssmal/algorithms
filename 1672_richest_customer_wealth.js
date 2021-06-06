const accounts = [[1,5],[7,3],[3,5]]

const solve = (accounts) => {
    return Math.max(...accounts.map(el => el.reduce((a, b) => a + b, 0)))
}

console.log(solve(accounts))
