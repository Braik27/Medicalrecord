import MedicalRecord from '../models/MedicalRecord.js';

// Get all medical records
export const getAllMedicalRecords = async (req, res) => {
    try {
        const medicalRecords = await MedicalRecord.find();
        res.status(200).json(medicalRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single medical record by ID
export const getMedicalRecordById = async (req, res) => {
    try {
        const medicalRecord = await MedicalRecord.findOne({ idRecord: req.params.id });

        if (!medicalRecord) {
            return res.status(404).json({ message: 'Medical record not found' });
        }

        res.status(200).json(medicalRecord);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get medical records by patient ID
export const getMedicalRecordsByPatientId = async (req, res) => {
    try {
        const medicalRecords = await MedicalRecord.find({ idPatient: req.params.patientId });

        if (medicalRecords.length === 0) {
            return res.status(404).json({ message: 'No medical records found for this patient' });
        }

        res.status(200).json(medicalRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new medical record
export const createMedicalRecord = async (req, res) => {
    try {
        // Check if a record with the same idRecord already exists
        const existingRecord = await MedicalRecord.findOne({ idRecord: req.body.idRecord });
        if (existingRecord) {
            return res.status(400).json({ message: 'A medical record with this ID already exists' });
        }

        const newMedicalRecord = new MedicalRecord(req.body);
        const savedMedicalRecord = await newMedicalRecord.save();

        res.status(201).json(savedMedicalRecord);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a medical record
export const updateMedicalRecord = async (req, res) => {
    try {
        const updatedMedicalRecord = await MedicalRecord.findOneAndUpdate(
            { idRecord: req.params.id },
            {
                ...req.body,
                lastupdateDate: new Date()
            },
            { new: true }
        );

        if (!updatedMedicalRecord) {
            return res.status(404).json({ message: 'Medical record not found' });
        }

        res.status(200).json(updatedMedicalRecord);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a medical record
export const deleteMedicalRecord = async (req, res) => {
    try {
        const deletedMedicalRecord = await MedicalRecord.findOneAndDelete({ idRecord: req.params.id });

        if (!deletedMedicalRecord) {
            return res.status(404).json({ message: 'Medical record not found' });
        }

        res.status(200).json({ message: 'Medical record deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};