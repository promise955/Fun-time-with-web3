const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const salt = bcrypt.genSaltSync(10)
const Register = async(req,res,next) => {
    try {
        const {username,password} = req.body
        const hashedpassword = bcrypt.hashSync(password,salt)

       const user = await User.create({username,hashedpassword})

        res.status(200).json({
          user
        })
    } catch (error) {
        res.status(400).json({
            msg : "An error ocurred"
        })
    }
}
const Login = async(req,res,next) => {
    try {
        const {username,password} = req.body
        const user = await User.findOne({username : username})
        if(user){
            const  token = jwt.sign({username,password},process.env.SECRET)
            res.status(200).json({
                token: token
               
            })

        }else{
            res.status(400).json({
                msg : "An error ocurred"
            })
        }
      
    } catch (error) {
        res.status(400).json({
            msg : "An error ocurred"
        })
    }
}

const Profile = async(req,res,next) => {
    try {
     
        res.status(200).json({
          msg : req.user

        })
    } catch (error) {
        res.status(400).json({
            msg : "An error ocurred"
        })
    }
}

module.exports = {
    Register,
    Login,
    Profile

}