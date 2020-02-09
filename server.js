const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`))