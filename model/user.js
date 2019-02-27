const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: { type: String },

    username: { type: String },
    email: { type: String },
    password: { type: String },
    hash: { type: String },
    createdDate: { type: Date, default: Date.now }
});
module.exports = mongoose.model('User', userSchema);