const fs = require('fs')
const path = require('path')
const filepath = path.join(__dirname, '/wikipedia/Words/Games/Action_game')


const fileReader = (file) => {
    let data = ''
    let readStream = fs.createReadStream(file, 'utf8')

    readStream.on('data', chunk => {
        data += chunk
    })
    .on('end', () => {
       let result = data.replace(/[.]/g, '')
        .split(/\s/)
        .reduce((map, word) =>
        Object.assign(map, {
            [word]: (map[word])
            ? map[word] + 1
            : 1,
      }),
      {}
    )
    return result
    })
}

fileReader(filepath)
