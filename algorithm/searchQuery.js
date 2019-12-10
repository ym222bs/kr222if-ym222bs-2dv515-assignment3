const file = require('../wordCounts.json')

const iterateWord = (query) => {
    let pagesArr = []
    Object.keys(file).map(function(key, i) {
        if (file[key].hasOwnProperty(query)) {
            pagesArr.push([key, file[key][query]])
        }
    })
    return pagesArr.sort((a, b) => b[1] - a[1]).splice(0, 5)
}

module.exports = iterateWord
