// @ts-check

const express = require('express')
const { FB_APP_ID } = require('../fb')

const router = express.Router()

router.get('/', (req, res) => {
  console.log(req.user)
  res.render('index', {
    // @ts-ignore
    userId: req.user?.id,
    userName: req.user?.name,
    APP_CONFIG_JSON: JSON.stringify({
      FB_APP_ID,
    }).replace(/"/g, '\\"'),
  })
})

router.get('/logout', (req, res) => {
  // TODO: implement
  res.clearCookie('access_token')
  res.redirect('/')
})

module.exports = router
