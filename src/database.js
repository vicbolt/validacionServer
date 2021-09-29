const config = require('./config');

const mongoose = require('mongoose');
const { database } = require('./config');

mongoose.connect(database.url)
    .then(() =>{
        console.log('DB connected')
    })
    .catch((err) => {
        console.log(err)
    })


