const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
app.get('/encoding', (req, res) => {
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash('Nitesh123@', salt, function(err, hash) {
            // Store hash in your password DB.
            console.log(hash);
            res.send(hash)
        });
    });
})

// password decoding route using bcrypt
app.get('/decoding', (req, res) => {
    bcrypt.compare('Nitesh123@', '$2b$10$QQ1PEUYIth8STdtyDCOY..W4TmV1vXWXxs2rZcF3jNu.gwyxqvFza', function(err, result) {
        res.send(result)
    });
    
})

// cookie encoding through jwt
app.get('/jwtSave', (req, res) => {
    const token = jwt.sign({email: 'nitesh@example.com'}, 'mySecret')
    res.cookie('token', token)
    res.send(token)
})

//cookie decoding using jwt
app.get('/jwtDecode', (req, res) => {
    const data = jwt.verify(req.cookies.token, 'mySecret')
    res.send(data)
})

app.listen(8080, () => {
    console.log('Connested server');
})