import PatientModel from "../model/Patient.js";
class PatientController {
    static Home = (req, res) => {
        res.render('home',{title: "Home"});
    }

    static Contact=(req,res)=>{
        res.render('contact',{title: "Contact Us"});
    }

    static createDoc = async (req, res) => {
        try {
            const { name, age, gender,date, history, pasthistory,comor, hb, urea, rbs, rme, culture, special } = req.body;
            const doc = new PatientModel({
                name,
                age,
                gender,
                date,
                history,
                pasthistory,
                comor,
                hb,
                urea,
                rbs,
                rme,
                culture,
                special
            })
            const result = await doc.save();
            // console.log(result);
            res.redirect('/patient');
        } catch (err) {
            console.log(err);
        }
    }

    static getAllDoc = async (req, res) => {
        try {
            const result = await PatientModel.find();
            //console.log(result);
            res.render('patient',{title: "Patients", data:result});
        } catch (err) {
            console.log(err);
        }

    }

   

    static deleteDocById=async (req,res)=>{
        try{
            const result=await PatientModel.findByIdAndDelete(req.params.id);
            res.redirect('/patient');
        }
        catch(err){
            console.log(err);
        }
     }

     static editDoc = async (req, res) => {
        try {
            const result = await PatientModel.findById(req.params.id);
            res.render('edit', { data: result,title:"Update" });
        }
        catch (err) {
            console.log(err);
        }
    }

     static updateDocById=async (req,res)=>{
        try{
            const result=await PatientModel.findByIdAndUpdate(req.params.id,req.body);
            res.redirect('/patient');
        }catch(err){
            console.log(err);
        }
       
     }

}

export default PatientController;