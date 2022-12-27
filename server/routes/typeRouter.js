const Router = require('express')
const typeController = require('../controllers/typeController')
const authAndCheckRoleMiddleware = require('../middleware/authAndCheckRoleMiddleware')
const router = new Router()

router.post('/', authAndCheckRoleMiddleware, typeController.create)
router.get('/', typeController.getAll)

module.exports = router
