const Router = require('express')
const brandController = require('../controllers/brandController')
const authAndCheckRoleMiddleware = require('../middleware/authAndCheckRoleMiddleware')
const router = new Router()

router.post('/', authAndCheckRoleMiddleware, brandController.create)
router.get('/', brandController.getAll)

module.exports = router
