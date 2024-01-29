const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const DataModel = require('./models/model')
const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb+srv://Aravindh:admin@cluster0.krctas7.mongodb.net/');

mongoose.connection.on('connected', () => {
    console.log('Connected to database');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

app.post('/add', (req, res) => {
    const datas = req.body.datas;
    DataModel.create({
        datas: datas
    }).then(result => res.json(result)).catch(err => res.json(err))

})

app.listen(3001, () => {
    console.log("Listening")
})