const User = require("../models/User.model")

const bcrypt = require('bcryptjs')

const saltRounds = 10

const jwt = require('jsonwebtoken')

const signup = (req, res, next) => {

    const { email, password, username, imageUrl } = req.body

    User
        .create({ email, password, username, imageUrl })
        .then((createdUser) => {
            const { email, username, _id, imageUrl } = createdUser
            const user = { email, username, _id, imageUrl }

            res.status(201).json({ user })
        })
        .catch(err => next(err))
}

const login = (req, res, next) => {

    const { email, password } = req.body

    if (email === '' || password === '') {
        res.status(400).json({ errorMessages: ["Indica email y contraseña."] })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ errorMessages: ["Usuario no encontrado."] })
                return
            }

            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, email, username, imageUrl } = foundUser

                const payload = { _id, email, username, imageUrl }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "6h" }
                )

                res.status(200).json({ authToken })
            }
            else {
                res.status(401).json({ errorMessages: ["Fallo en la autentificación del usuario."] })
            }

        })
        .catch(err => next(err))
}
const editUser = (req, res, next) => {

    const { user_id } = req.params

    const { username, imageUrl, email } = req.body

    User
        .findByIdAndUpdate(user_id, { username, imageUrl, email })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const deleteUser = (req, res, next) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(() => res.status(200).json({ message: "OK" }))
        .catch(err => next(err))
}

const verify = (req, res, next) => {

    res.status(200).json(req.payload)
}

module.exports = {
    signup,
    login,
    editUser,
    deleteUser,
    verify
}