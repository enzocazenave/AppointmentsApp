const { model, Schema } = require('mongoose');

const EmployeeSchema = Schema({
    shopid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
});

module.exports = model('Employee', EmployeeSchema);