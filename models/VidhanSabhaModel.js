const mongoose = require("mongoose");

const VidhanSabhaSchema = new mongoose.Schema({
   
  VidhanSabhaNumber:{
        type:Number,
        required:true
    },
    VidhanSabhaName:{
        type:String,
        required:true
    },
    stateId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'StateModel',
        required:true
    },
    lokSabhaId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'LokSabhaModel',
        required:true
    },

})

const VidhanSabhaModel =  new mongoose.model('VidhanSabha',VidhanSabhaSchema);
module.exports = {VidhanSabhaModel};