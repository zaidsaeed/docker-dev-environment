const express = require('express')
const app = express()
const port = process.env.PORT || 2000

app.get('/', (req, res) => {
  res.send('Hello Zaid Seed!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})