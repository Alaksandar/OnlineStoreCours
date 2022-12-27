const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authAndCheckRoleMiddleware = require('../middleware/authAndCheckRoleMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authAndCheckRoleMiddleware, userController.check)

module.exports = router
