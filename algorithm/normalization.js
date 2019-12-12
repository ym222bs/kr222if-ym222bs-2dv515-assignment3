
module.exports.normalize = (arrayOfWord) => {
    const maxValue = arrayOfWord[0][1]
    for (let i = 0; i < arrayOfWord.length; i++) {
        arrayOfWord[i][1] = (arrayOfWord[i][1] / maxValue).toFixed(2)
    }
    return arrayOfWord
}