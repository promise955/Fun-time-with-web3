const express = require('express')
const accountroutes = express.Router()
const  AccountController = require('../controllers/accountController')
const passport = require('../security/passport')
const jwt = passport.authenticate('jwt',{session : false})
accountroutes.post('/createAccount',jwt, AccountController.CreateAccount)
accountroutes.get('/getAllAccount',jwt,AccountController.getAllAccount)
accountroutes.get('/getAccount/:walletKey',jwt,AccountController.getAccount)
// accountroutes.delete('/deleteAccount',AccountController.Register)
// accountroutes.delete('/deleteAccount/:walletKey',AccountController.Register)
// accountroutes.update('/updateAccount/:walletKey',AccountController.Register)




module.exports = accountroutes