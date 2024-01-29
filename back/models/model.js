const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    datas: String
})

const DataModel = mongoose.model("data", DataSchema)
module.exports = DataModels