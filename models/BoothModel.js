const mongoose = require("mongoose");

const BoothSchema = new mongoose.Schema({
    boothNumber:{
        type:Number,
        required:true
    },
    boothName:{
        type:String,
        required:true
    },
    pollingStationId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'PollingStationModel',
        required:true
    }

})

const BoothModel =  new mongoose.model('booth',BoothSchema);
module.exports = {BoothModel};