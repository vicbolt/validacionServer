const { Schema, model } = require('mongoose');

const messageSchema = new Schema (
    {
        userOne: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        userTwo: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        userOwner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        text:{
            type: String,
            required: true,
        },
},
{
    versionKey: false,
    timestamps: true,
})


module.exports = model('Message', messageSchema)