const mongoose = require('mongoose')

mongoose
    // .connect('mongodb://127.0.0.1:27017/react-node', { useNewUrlParser: true })
    .connect('mongodb+srv://luckyowl157:80633878116luckyowl@cms-cluster.ardv5.mongodb.net/s4you_node', { useNewUrlParser: true })
    .then(responnse => {
        console.log('monngo connected')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db