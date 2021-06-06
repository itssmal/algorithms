const num = 14

const solve = (num) => {
    let count = 0

    while (num > 0) {
        if (num % 2 === 0) {
            num /= 2
        } else {
            num--
        }
        count++
    }

    return count
}

console.log(solve(num));
