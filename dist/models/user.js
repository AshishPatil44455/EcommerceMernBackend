import mongoose from "mongoose";
import validator from "validator";
const schema = new mongoose.Schema({
    _id: {
        type: String,
        required: [true, "User id is required"],
    },
    name: {
        type: String,
        required: [true, "User name is required"],
    },
    email: {
        type: String,
        required: [true, "User email is required"],
        unique: [true, "Email already exists"],
        validate: validator.default.isEmail,
    },
    photo: {
        type: String,
        required: [true, "User photo is required"],
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: [true, "User gender is required"],
    },
    dob: {
        type: Date,
        required: [true, "User date of birth is required"],
    },
}, {
    timestamps: true,
});
schema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob;
    let age = today.getFullYear() - dob.getFullYear();
    if (today.getMonth() < dob.getMonth() ||
        (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
});
export const User = mongoose.model("User", schema);
