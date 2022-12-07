const User = require("../models/User.model")

const bcrypt = require('bcryptjs')

const saltRounds = 10

const jwt = require('jsonwebtoken')

const signup = (req, res, next) => {

    const { email, password, username } = req.body

    if (password.length < 4) {
        res.status(400).json({ message: 'Password must have at least 4 characters' })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (foundUser) {
                res.status(400).json({ message: "User already exists." })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ email, password: hashedPassword, username })
        })
        .then((createdUser) => {
            const { email, username, _id, imageUrl } = createdUser
            const user = { email, username, _id, imageUrl }

            res.status(201).json({ user })
        })
        .catch(err => {
            res.status(500).json({ message: "Internal Server Error" })
        })
}

const login = (req, res, next) => {

    const { email, password } = req.body

    if (email === '' || password === '') {
        res.status(400).json({ message: "Provide email and password." })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ message: "User not found." })
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
                res.status(401).json({ message: "Unable to authenticate the user" })
            }

        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "Internal Server Error" })
        })
}
const editUser = (req, res, next) => {

    const { user_id } = req.params

    const { username, imageUrl, email } = req.body

    User
        .findByIdAndUpdate(user_id, { username, imageUrl, email })
        .then(response => res.json(response))
        .catch(err => {
            res.status(500).json({ message: "Internal Server Error" })
        })
}

const deleteUser = (req, res, next) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(() => res.status(200).json({ message: "OK" }))
        .catch(err => {
            res.status(500).json({ message: "Internal Server Error" })
        })
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