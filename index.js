const express = require('express')
const {plus} = require('./service');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getcode', (req, res) => {
  res.send('Iyeeeeeeee!!!!!!!!!!!!!')
})

app.get('/plus/:one/:two', (req, res) => {
  let {one,two} = req.params
  let result = plus(one, two)
  res.json({result})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})