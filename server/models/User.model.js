const { Schema, model } = require("mongoose")

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

    ImageUrl: {
      type: String,
      default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'
    }
  },
  {
    timestamps: true
  }
);

const User = model("User", userSchema)

module.exports = User
