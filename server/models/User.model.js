const { Schema, model } = require("mongoose")
const bcrypt = require('bcryptjs')

const userSchema = new Schema(
  {

    username: {
      type: String,
      required: [true, 'El nombre de usuario es obligatorio']
    },

    email: {
      type: String,
      required: [true, 'El email es obligatorio'],
      unique: true,
      lowercase: true,
      trim: true
    },

    password: {
      type: String,
      required: [true, 'La contraseña es obligatoria']
    },

    imageUrl: {
      type: String,
      default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'
    }
  },
  {
    timestamps: true
  }
)

userSchema.pre('save', function (next) {

  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(this.password, salt)
  this.password = hashedPassword

  next()
})

const User = model("User", userSchema)

module.exports = User
