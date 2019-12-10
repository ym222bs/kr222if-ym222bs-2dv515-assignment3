const express = require('express')
const top5 = require('./algorithm/searchQuery')

const app = express()
const PORT = process.env.PORT || 8000

app.get('/content-based/:query', (req, res) => {
    try {
        const result = top5(req.params.query)
        if (result.length === 0) {
            return res.status(404).json('No match for your shmoogle search!')
        }
        return res.status(200).json(result)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})


app.listen(PORT, () => { console.log('Server is running on: ' + PORT) })