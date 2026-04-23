const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json({
    message: 'Hello DevOps ! DEV',
    status: 'ok',
    version: '1.0.0'
  })
})

app.get('/health', (req, res) => {
  res.json({ status: 'healthy'})
})

app.listen(PORT, () =>{
  console.log(`Serveur lancé sur le port ${PORT}`)
})

module.exports = app