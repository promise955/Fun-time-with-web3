const express = require('express')
const passport = require('../security/passport')
const userroutes = express.Router()
const UserController = require('../controllers/userController')
const jwt = passport.authenticate('jwt',{ session : false})
userroutes.post('/register',UserController.Register)
userroutes.post('/login',UserController.Login)
// userroutes.get('/profile',passport.authenticate('jwt',(err,info,user) => {
//     if(err){
//         console.log(err);
//     }else if(info){
//         console.log(info);
//     }else{
//         console.log(user);
//     }
// }))
userroutes.get('/profile',jwt,UserController.Profile)


module.exports = userroutes