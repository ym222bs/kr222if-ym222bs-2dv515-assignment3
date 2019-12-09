const file = require('../wordCounts.json')
let z = 0
const iterateWord = (query) => {
    let pagesArr = []
    Object.keys(file).map(function(key, i) {
        if (file[key].hasOwnProperty(query)) {
            pagesArr.push([key, file[key][query]])
        }
    })
    console.log('pagesArr: ', pagesArr);
}

iterateWord('java')