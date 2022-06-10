import express from 'express';
import mongoose from 'mongoose';
import connectDB from './db/connection.js';
import web from './routes/web.js'
import {join} from 'path';
const app=express();
const port=process.env.PORT||8000;
//const DATABASE_URL=process.env.DATABASE_URL || "mongodb://localhost:27017";
const DATABASE_URL="mongodb+srv://brijesh:XmPbBzk87hv2Bu2m@cluster0.3xov4fd.mongodb.net/myhospital?retryWrites=true&w=majority"

// database connection
connectDB(DATABASE_URL);

//for accesing html form data
app.use(express.urlencoded({extended:false}));

//use static file middlewhere
app.use("/",express.static(join(process.cwd(),"public")));
app.use("/patient",express.static(join(process.cwd(),"public")));
app.use("/contact",express.static(join(process.cwd(),"public")));
app.use("/patient/edit",express.static(join(process.cwd(),"public")));

//templet engine
app.set('view engine','ejs')

//router middlewhere
app.use('/',web);

app.listen(port,()=>{
    console.log(`Program is running on port:${port}`);
})