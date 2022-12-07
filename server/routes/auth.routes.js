const router = require("express").Router()

const { signup, login, editUser, deleteUser, verify } = require('../controllers/auth.controller')

const { isAuthenticated } = require('./../middleware/jwt.middleware')

router.post('/signup', signup)

router.post('/login', login)

router.put('/edit/:user_id', isAuthenticated, editUser)

router.delete('/delete/:user_id', isAuthenticated, deleteUser)

router.get('/verify', isAuthenticated, verify)


module.exports = router