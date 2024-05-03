const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    address: {
        geolocation: {
            lat: Number,
            long: Number
        },
        city:{
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        building: String,
        zipcode: Number
    },
    email: String,
    username: String,
    name: {
        firstname: {
            type: String,
            required: true
        },
        lastname:{
            type: String,
            required: true
        }
    },
    phone: String,
    photo: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema, "users");