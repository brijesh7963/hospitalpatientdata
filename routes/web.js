import express from 'express';
const router=express.Router();
import PatientController from "../controller/patientController.js";

router.get('/',PatientController.Home);
router.get('/contact',PatientController.Contact);
router.get('/patient',PatientController.getAllDoc);
router.post('/patient',PatientController.createDoc);
router.get('/patient/edit/:id',PatientController.editDoc);
router.post('/patient/update/:id',PatientController.updateDocById);
router.post('/patient/delete/:id',PatientController.deleteDocById);

export default router;