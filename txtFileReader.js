const path = require('path')
const fs = require('fs')

const dirPath = path.join(__dirname, 'wikipedia/Words')

fs.readdir(dirPath, (err, folders) => {
    if (err) return console.error(err)
    folders.forEach((file) => {
        fs.readdir(`${dirPath}/${file}`, (err, files) => {
            if (err) console.error(err)
            files.forEach(file => {
                // console.log(file)
            })
        })
    })
})