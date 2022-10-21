const express = require('express')
const authroutes = express.Router()
const passport = require('../security/passport')
const jwt = passport.authenticate('jwt',{session : false})
const AuthController =  require('../controllers/authController')
authroutes.get('/check',jwt,AuthController.Auth)
module.exports = authroutes