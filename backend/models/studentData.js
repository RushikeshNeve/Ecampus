const mongoose  = require('mongoose');

const studentDataSchema  = new mongoose.Schema({
    name: {
            type: String,
            required: true
        },
     password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
   phone: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    
    batch: {   
        type: String,
        required: true,
    },
    branch:{
        type: String,
        required: true,
    },
    bod: {
        type : Date,
        required: true,
    }
    
});

const studentData  = mongoose.model("studentData", studentDataSchema);

module.exports = studentData;