const calcTotalPrice = (arr) => {
    return !arr ? 0 : arr.reduce((acc, item) => {
        return acc + Number(item.price) * item.count;
    }, 0)
}

export default calcTotalPrice;