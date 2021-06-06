const s = "aaiougrt"
const indices = [4,0,2,6,7,3,1,5]

//first variant
const solve = (s, indices) => {
    const letters = Array.from(s)
    let map = {}

    for (let i = 0; i < indices.length; i++) {
        map[indices[i]] = letters[i]
    }

    return Object.values(map).join('')
}

//second variant
const solve1 = (s, indices) => {
    const letters = Array.from(s)
    let res = []

    for (let i = 0; i < indices.length; i++) {
        res[indices[i]] = letters[i]
    }

    return res.join('')
}

console.log(solve1(s, indices));
