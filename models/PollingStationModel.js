const mongoose = require("mongoose");

const PollingStationSchema = new mongoose.Schema({
  

    pollingStationName:{
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
    vidhanSabhaId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'VidhanSabhaModel',
        required:true
    },
  

})

const PollingStationModel =  new mongoose.model('PollingStation',PollingStationSchema);
module.exports = {PollingStationModel};