const { Schema, model } = require('mongoose')

const eventSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'El título es obligatorio']
        },

        // owner: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'User'
        // },

        description: {
            type: String,
            required: [true, 'La descripción es obligatoria']
        },

        eventDate: {
            type: Date,
            required: [true, 'La fecha es obligatoria']
        },

    },

    {
        timestamps: true
    }
)

const Event = model('Event', eventSchema)