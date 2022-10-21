const mongoose = require('mongoose')
require('../security/db')
const Schema = mongoose.Schema

const  userWallet  = new Schema({
     userid : {type : String},
     address: {type: String},
     privateKey: {type : String},
     createdAt: { type: Date, default: Date.now() },
     updatedAt: { type: Date, default: Date.now() },

});

const Account = mongoose.model("Account", userWallet);

module.exports = Account