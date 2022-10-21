const mongoose = require('mongoose')
require('../security/db')
const Schema = mongoose.Schema

const  user  = new Schema({
     username: {type: String},
     hashedpassword : {type : String},
     createdAt: { type: Date, default: Date.now() },
     updatedAt: { type: Date, default: Date.now() },

});


const User = mongoose.model("User", user);


module.exports = User