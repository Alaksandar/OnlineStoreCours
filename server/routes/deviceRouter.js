const Router = require('express')
const deviceController = require('../controllers/deviceController')
const authAndCheckRoleMiddleware = require('../middleware/authAndCheckRoleMiddleware')
const router = new Router()

router.post('/', authAndCheckRoleMiddleware, deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router
