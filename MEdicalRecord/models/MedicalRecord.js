import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema({
    idRecord: {
        type: Number,
        required: true,
        unique: true
    },
    idPatient: {
        type: Number,
        required: true
    },
    creationDate: {
        type: Date,
        default: Date.now
    },
    lastupdateDate: {
        type: Date,
        default: Date.now
    },
    allergies: {
        type: String,
        default: ''
    },
    medications: {
        type: String,
        default: ''
    },
    diagnostics: {
        type: String,
        default: ''
    }
},


    {
    timestamps: true
});

// Update the lastupdateDate before saving
medicalRecordSchema.pre('save', function(next) {
    this.lastupdateDate = new Date();
    next();
});

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);

export default MedicalRecord;