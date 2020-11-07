const express = require('./config/express')
express.listen(3333, () => {
  console.info('Servidor rodando')
})
