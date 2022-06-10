import mongoose from "mongoose";



//defining schema
const patientSchema=new mongoose.Schema({
    name:{type:String, required:true, trim:true}, //trim uses for space
    age:{type:Number, required: true},
    gender:{type:String, required:true},
    date:{type:Date,default:Date.now},
    history:{type:String},
    pasthistory:{type:String},
    comor:{type:String},
    hb:{type:String},
    urea:{type:String},
    rbs:{type:String},
    rme:{type:String},
    culture:{type:String},
    special:{type:String}
})



//model
const PatientModel=mongoose.model("patient",patientSchema);

export default PatientModel;