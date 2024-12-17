const mongoose = require("mongoose");

const VidhanSabhaMandalsSchema = new mongoose.Schema({
   
    mandalId:{
        type:String,
        required:true
    },
    vidhanSabhaId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'VidhanSabhaModel',
        required:true
    },

})

const VidhanSabhaMandalsModel =  new mongoose.model('VidhanSabhaMandals',VidhanSabhaMandalsSchema);
module.exports = {VidhanSabhaMandalsModel};