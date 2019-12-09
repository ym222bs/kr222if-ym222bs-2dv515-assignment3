const fs = require('fs')
const path = require('path')
const directoryPath = path.join(__dirname, 'wikipedia/Words')


const stringifyArray = (result) => {
    fs.writeFile('./wordCounts.json', JSON.stringify(result, null, 2), err => {
        if (err) throw err
    
        console.log('Successfully wrote file')
    })
}


const iterateDirectory = () => {
    const arr = []
    fs.readdir(directoryPath, function (err, files) {
        if (err) console.log('Unable to scan directory: ' + err)

        files.forEach(async function (file) {
            let filePathArray = file.split(' ')
            filePathArray.forEach(filestring => {
                let eachArticle = {}
                eachArticle[filestring] = fileReader(path.join(`${directoryPath}/${filestring}`))
                arr.push(eachArticle)
            })
        })
        console.log('arr: ', arr);
        stringifyArray(arr)
    })
}


const fileReader = (file) => {
    try {
        const readStream = fs.readFileSync(file, 'utf8')
        const words = readStream.replace(/[.]/g, '').split(/\s/)

        const frequencyMap = {}
        words.forEach(word  => {
            if (!frequencyMap[word]) {
                frequencyMap[word] = 0
            }
            frequencyMap[word] += 1
        })
        
        return frequencyMap

    // Wiie
    // const map = words.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map())
    
    // let map = new Map([...new Set(words)].map(
    //     x => [x, words.filter(y => y === x).length]
    // ))
    // console.log(map)

    } catch (error) {
        console.log(error)
    }
  
}


// console.log(iterateDirectory())

<<<<<<< HEAD
iterateDirectory()
=======
iterateDirectory()
>>>>>>> 72335dbc15821e34caf04756e48fdbdc2d95d60c
