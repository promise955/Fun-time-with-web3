require('dotenv').config()
//require('./security/db')
const express  = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./route')
const port = process.env.PORT || 5001
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))
app.use('/api/v1',routes)
app.use((req,res) => res.send('Not found'))
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})