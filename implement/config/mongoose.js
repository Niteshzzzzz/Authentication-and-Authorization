const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/authTesting')

const db = mongoose.connection

db.on('err', err => {
    console.log(err);
})

db.on('open', () => {
    console.log('Connected to database.');
    
})