const { model, Schema } = require('mongoose');

const AppointmentSchema = Schema({
    userid: {
        type: String,
        required: true
    },
    shopid: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true,
    },
    comments: {
        type: String
    },
});

module.exports = model('Appointment', AppointmentSchema);