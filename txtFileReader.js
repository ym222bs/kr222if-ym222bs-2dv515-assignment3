'use strict'
const path = require('path')
const fs = require('fs')
const Stream = require('stream')
const readLine = require('readline')
const es = require('event-stream')
const dirPath = path.join(__dirname, 'wikipedia/Words')

/**
 * @param {filePath} folders iterate every file
 */
const iterateFolders = () => {
    try {


        fs.readdir(dirPath, (err, folders) => {
            if (err) return console.error(err)
            folders.forEach((filePath) => {
                fs.readdir(`${dirPath}/${filePath}`, (err, files) => {
                    if (err) console.error(err)
                    files.forEach(file => {
                        // console.log(path.join(`${dirPath}/${filePath}/${file}`));
                        const object = fileReader(path.join(`${dirPath}/${filePath}/${file}`))
                        // console.log('object: ', object);

                        // fs.readFile(`${dirPath}/${filePath}/${file}`, 'utf8', (err, text) => {
                        //     if (err) console.err(err)
                        //     convertToHashCodes(`${dirPath}/${filePath}/${file}`, text)
                        // })
                    })
                })
            })
        })
    } catch (err) {
        console.error(err)
    }
}
const fileReader = (file) => {
    try {
    let data = ''
    let readStream = fs.createReadStream(file, 'utf8')

    readStream.on('data', chunk => {
        console.log('chunk: ', chunk);
        data += chunk
    })
        .on('end', () => {
            let result = data.replace(/[.]/g, '')
                .split(/\s/)
                .reduce((map, word) =>
                    Object.assign(map, {
                        [word]: (map[word]) ? map[word] + 1 : 1,
                    }),
                    {}
                )
            return result
        })
    } catch (err) {
        console.error(err)
    }
}

iterateFolders(dirPath)

// const file = fs.createReadStream((`C:/Users/Mosa/School/arkurs3/2dv515/assignment3/kr222if-ym222bs-2dv515-assignment3/wikipedia/Words/Games/7400_series`, 'utf8')).pipe(es.mapSync((line) => {
//     console.log(line)
// }))