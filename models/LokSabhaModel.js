const mongoose = require("mongoose");

const LokSabhaSchema = new mongoose.Schema({
   
  lokSabhaNumber:{
        type:Number,
        required:true
    },
    lokSabhaName:{
        type:String,
        required:true
    },
    stateId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'StateModel',
        required:true
    },

})

const LokSabhaModel =  new mongoose.model('LokSabha',LokSabhaSchema);
module.exports = {LokSabhaModel};