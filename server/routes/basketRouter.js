const Router = require('express')
const basketController = require('../controllers/basketController')
const authAndCheckRoleMiddleware = require('../middleware/authAndCheckRoleMiddleware')
const router = new Router()

router.post('/', authAndCheckRoleMiddleware , basketController.addBasketDevice)
router.get('/', authAndCheckRoleMiddleware , basketController.getBasket)

module.exports = router