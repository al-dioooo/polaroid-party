export const randomize = (data) => {
    let index = data.length, randomIndex

    while (index !== 0) {
        randomIndex = Math.floor(Math.random() * index)
        index--

        // Swap
        [data[index], data[randomIndex]] = [data[randomIndex], data[index]]
    }

    return data
}