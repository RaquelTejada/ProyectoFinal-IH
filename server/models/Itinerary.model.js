const { Schema, model } = require('mongoose')

const itinerarySchema = new Schema(
    {
        city: {
            type: String,
            required: [true, 'La ciudad es obligatoria']
        },

        transport: {
            type: String,
            enum: ['Andando', 'En bici', 'En coche'],
            required: [true, 'El medio de transporte es obligatorio']
        },

        category: {
            type: String,
            enum: ['Arte', 'Gastronomía', 'Naturaleza', 'Ocio nocturno', 'Playas', 'Turismo rural'],
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

        imageUrl01: {
            type: String,
            required: [true, 'La imagen es obligatoria']
        },

        imageUrl02: {
            type: String,
            required: [true, 'La imagen es obligatoria']
        },

        imageUrl03: {
            type: String,
            required: [true, 'La imagen es obligatoria']
        },

        // owner: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'User'
        // }
    },

    {
        timestamps: true
    }
)

const Itinerary = model('Itinerary', itinerarySchema)

module.exports = Itinerary