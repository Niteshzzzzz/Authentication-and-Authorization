const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')

app.use(cookieParser())

// save cookie route
app.get('/', (req, res) => {
    res.cookie('name', 'Nitesh Kumar')
    res.send('cooke create')
})

// read cookie route
app.get('/read', (req, res) => {
    res.send(req.cookies)
})

// password encode route using bcrypt
app.get('/', (req, res) => {
    res.cookie('name', 'Nitesh Kumar')
    res.send('cooke create')
})

app.listen(8080, () => {
    console.log('Connested server');
})