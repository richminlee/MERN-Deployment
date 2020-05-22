const mongoose = require('mongoose');

const BeltSchema = new mongoose.Schema({
    project: { 
        type: String,
        required: [
            true, "Project is required"
        ],
        minlength:[
            3, "Project needs to be at least 3 characters long"
        ]
    },
    dueDate: {
        type: Date,
        required: [ true, "Due Date is Required"]
    },
    status:{ type: Number, default:0 }
}, { timestamps: true});
module.exports.Belt = mongoose.model('Belt', BeltSchema);