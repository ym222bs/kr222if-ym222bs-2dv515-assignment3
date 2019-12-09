const fs = require('fs')
const path = require('path')


const stringifyArray = (result) => {
    fs.writeFile('./wordCounts.json', JSON.stringify(result, null, 2), err => {
        if (err) throw err
    
        console.log('Successfully wrote file')
    })
}


const iterateDirectory = () => {
    // const arr = []
    const directoryPath = path.join(__dirname, 'wikipedia/Words')
    fs.readdir(directoryPath, function (err, files) {
        if (err) console.log('Unable to scan directory: ' + err)

        let obj = {}
        files.forEach(async function (file) {
            let filePathArray = file.split(' ')
            filePathArray.forEach(filestring => {
                obj[filestring] = fileReader(path.join(`${directoryPath}/${filestring}`))
                // arr.push(obj)
            })
        })
        stringifyArray(obj)
    })
}


const fileReader = (file) => {
    try {
        const readStream = fs.readFileSync(file, 'utf8')
        const words = readStream.replace(/[.]/g, '').split(/\s/)

        const frequencyMap = {}
        words.forEach(word  => {
            if(word === '') return null
            if (!frequencyMap[word]) {
                frequencyMap[word] = 0
            }
            frequencyMap[word] += 1
        })
        return frequencyMap
    } catch (error) {
        console.log(error)
    }
  
}


// console.log(iterateDirectory())

iterateDirectory()
