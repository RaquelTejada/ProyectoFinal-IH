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
      default: 'https://img.freepik.com/foto-gratis/toma-interior-hermosa-mujer-afroamericana-feliz-sonriendo-alegremente-manteniendo-brazos-cruzados-relajandose-interior-despues-conferencias-matutinas-universidad_273609-1270.jpg?w=1380&t=st=1670762540~exp=1670763140~hmac=64dce91ff8c86ed513caeb392d33535e91ae6d22785f015886d9044c6665b7b2'
    },

    Fav: [{
      type: Schema.Types.ObjectId,
      ref: 'Itinerary'
    }],

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
