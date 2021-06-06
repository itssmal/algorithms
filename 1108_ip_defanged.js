let address = "1.1.1.1"

// 1st variant (mine)
const solve = (address) => {
    let res = Array.from(address).map(el => el === '.' ? el = '[.]' : el)

    return res.join('')
}

//2nd variant
const solve1 = (address) => {
    return address.split('.').join('[.]')
}

console.log(solve(address))
