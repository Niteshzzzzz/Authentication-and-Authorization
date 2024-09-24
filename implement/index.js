const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mongooseConnection = require('./config/mongoose')
const userModel = require('./models/user')
const path = require('path')

app.use(cookieParser())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(3000, () => {
    console.log('server is running at port no. 3000');
    
})