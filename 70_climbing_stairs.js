const n = 3

const climb = (n) => {
    let first = 1
    let sec = 2
    let variants = 1

    let stairs = []

    // take 1 step every time
    for (let i = 0; i < n; i++) {
        stairs.push(i)
    }

    //take 2 steps every time
    if (n % 2 === 0) {
        for (let i = 0; i < n; i+2) {
            stairs.push(i)
        }
    }

    //

    // first var: every first we take 1
    // second var: every first we take 2

    console.log(stairs)
}

climb(n)

