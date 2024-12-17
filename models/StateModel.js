const mongoose = require("mongoose");

const StateSchema = new mongoose.Schema({
    stateName:{
        type:String,
        required:true
    },

})

const StateModel =  new mongoose.model('State',StateSchema);
module.exports = {StateModel};