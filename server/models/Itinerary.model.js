const { Schema, model } = require('mongoose')

const itinerarySchema = new Schema(
    {
        city: {
            type: String,
            trim: true,
            required: [true, 'La ciudad es obligatoria']
        },

        transport: {
            type: String,
            enum: ['Andando', 'En bici', 'En coche'],
            required: [true, 'El medio de transporte es obligatorio']
        },

        category: {
            type: String,
            enum: ['Arte', 'Gastronomia', 'Naturaleza', 'Ocio nocturno', 'Turismo'],
            required: [true, 'La categoría es obligatoria']
        },

        title: {
            type: String,
            required: [true, 'El título es obligatorio']
        },

        duration: {
            type: String,
            required: [true, 'La duración es obligatoria']
        },

        pets: {
            type: Boolean
        },

        description: {
            type: String,
            required: [true, 'La descripción es obligatoria']
        },

        images: {
            type: String
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },

        events: {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        },

        locations: [{
            type:
            {
                type: String,
            },

            coordinates: [Number]
        }]
    },

    {
        timestamps: true
    }
)

const Itinerary = model('Itinerary', itinerarySchema)

module.exports = Itinerary