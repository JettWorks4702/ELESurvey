const mongoose = require("mongoose");

const DistrictSchema = new mongoose.Schema({
   
    districtName:{
        type:String,
        required:true
    },
    districtId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DistrictModel',
        required:true
    },
    stateId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'StateModel',
        required:true
    },

})

const districtModel =  new mongoose.model('district',DistrictSchema);
module.exports = {districtModel};