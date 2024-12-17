const mongoose = require("mongoose");

const mandalSchema = new mongoose.Schema({
   
    mandalName:{
        type:String,
        required:true
    }

})

const mandalModel =  new mongoose.model('mandal',mandalSchema);
module.exports = {mandalModel};