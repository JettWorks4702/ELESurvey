const mongoose = require("mongoose");

const VoterSchema = new mongoose.Schema({
    serialNumber:{
        type:Number,
        required:true
    },
    sectionNumber:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    nameHindi:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    houseNumber:{
        type:Number
    },
    relativeNames:{
        type:String
    },
    relativeNamesHimdi:{
        type:String
    },
    relationType:{
        type:String
    },
    mobile:{
        type:Number,
        required:true
    },
    EPICnumber:{
        type:Number,
        required:true
    },
    boothId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'BoothModel',
        required:true
    }

})

const VoterModel =  new mongoose.model('voter',VoterSchema);
module.exports = {VoterModel};