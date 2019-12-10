const file = require('../wordCounts.json')

const iterateWord = (query) => {
    let pagesArr = []
    Object.keys(file).map(function(key, i) {
        if (file[key].hasOwnProperty(query)) {
            pagesArr.push([key, file[key][query]])
        }
    })
    return pagesArr
}

const pagesArr = iterateWord('java')
console.log('pagesArr: ', pagesArr);