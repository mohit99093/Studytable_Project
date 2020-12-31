const express = require('express')
const ctrl = require('../controllers/control')

const router = new express.Router()

router.post('/api/info',ctrl.postContact)

module.exports = router;