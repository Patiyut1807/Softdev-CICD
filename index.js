const express = require('express');
const isPrime = require('./prime');
let app = express();


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/is_prime/:num', (req, res) => {
    let {num} = req.params
    let response = isPrime(num)
    res.send(response)
  })

  app.listen(5000,()=>{
    console.log("llll");
  })