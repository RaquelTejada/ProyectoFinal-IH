const { Schema, model } = require('mongoose')

const destinationSchema = new Schema(
    {
        city: {
            type: String,
            required: [true, 'La ciudad es obligatoria']
        },

        imageURL: [{
            type: String,
        }],

        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },

    {
        timestamps: true
    }
)

const Destination = model('Destination', destinationSchema)

module.exports = Destination