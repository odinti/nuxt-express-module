const { Router } = require('express')
const router = Router()

module.exports = (app) => {
  router.get('/api/test', (req, res) => {
    res.send('testing success')
  })
  return router
}
