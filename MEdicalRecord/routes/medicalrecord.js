import express from 'express';
import {
    getAllMedicalRecords,
    getMedicalRecordById,
    getMedicalRecordsByPatientId,
    createMedicalRecord,
    updateMedicalRecord,
    deleteMedicalRecord
} from '../controllers/medicalRecordController.js';

const router = express.Router();

// GET all medical records
router.get('/', getAllMedicalRecords);

// GET a single medical record by ID
router.get('/:id', getMedicalRecordById);

// GET medical records by patient ID
router.get('/patient/:patientId', getMedicalRecordsByPatientId);

// POST a new medical record
router.post('/', createMedicalRecord);

// PUT (update) a medical record
router.put('/:id', updateMedicalRecord);

// DELETE a medical record
router.delete('/:id', deleteMedicalRecord);

export default router;