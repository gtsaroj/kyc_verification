import mongoose from "mongoose";

const kycModel = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    documentNumber : {
        type: Number,
        required: true,
        unique: true
        

    },
    address: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true })


const KYC = mongoose.model("KYC", kycModel)