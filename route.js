const express = require('express')
const routes = express.Router()
const userRoutes = require('./routes/userRoutes')
const accountRoutes = require('./routes/accountRoutes')
const authRoutes = require('./routes/authRoutes')
routes.use((req,res,next) => {
    console.log(req.url);
    next()
})

routes.use('/user',userRoutes)
routes.use('/account',accountRoutes)
routes.use('/auth',authRoutes)
module.exports = routes