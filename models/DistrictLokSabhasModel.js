const mongoose = require("mongoose");

const DistrictLokSabhasSchema = new mongoose.Schema({
    districtId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DistrictModel',
        required:true
    },
    lokSabhaId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'LokSabhaModel',
        required:true
    },

})

const districtLokSabhasModel =  new mongoose.model('districtLokSabhas',DistrictLokSabhasSchema);
module.exports = {districtLokSabhasModel};