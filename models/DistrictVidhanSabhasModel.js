const mongoose = require("mongoose");

const DistrictVidhanSabhasSchema = new mongoose.Schema({
   
    districtId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DistrictModel',
        required:true
    },
    vidhanSabhaId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'VidhanSabhaModel',
        required:true
    },

})

const districtVidhanSabhasModel =  new mongoose.model('districtVidhanSabhas',DistrictVidhanSabhasSchema);
module.exports = {districtVidhanSabhasModel};