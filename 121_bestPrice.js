const prices = [7,1,5,3,6,4]

//my first variant
const bestPrice = (prices) => {
    let bestStartDay = 0
    let profit = 0

    prices.forEach((el, idx) => {
        if (prices[bestStartDay] < el) {
            bestStartDay = idx
        }
    })

    for (let i = bestStartDay; i < prices.length; i++) {
        if (profit < prices[i] - prices[bestStartDay]) {
            profit = prices[i] - prices[bestStartDay]
        }
    }
    return profit
}

const bestPrice1 = (prices) => {
    let min = prices[0]
    let max = 0

    for (let i = 1; i < prices.length; i++) {
        if (min > prices[i]) {
            min = prices[i]
        } else if (prices[i] - min > max) {
            max = prices[i] - min
        }
    }

    return max
}

const bestPrice2 = (prices) => {
    let min = prices[0]
    prices.reduce((a, b) => {

    })
}
