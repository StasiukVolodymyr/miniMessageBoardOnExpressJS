const { Router } = require('express')
const router = Router()
const newFormController = require('../controllers/newFormController')

router.get('/', newFormController.getNewFormController)
router.post('/', newFormController.postNewFormController)

module.exports = router