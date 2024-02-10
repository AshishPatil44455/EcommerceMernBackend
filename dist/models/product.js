import mongoose from "mongoose";
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User name is required"],
    },
    Photo: {
        type: String,
        required: [true, "User photo is required"],
    },
    price: {
        type: Number,
        required: [true, "User price is required"],
    },
    stock: {
        type: Number,
        required: [true, "User stock is required"],
    },
    category: {
        type: String,
        required: [true, "User category is required"],
        trim: true,
    },
}, {
    timestamps: true,
});
export const Product = mongoose.model("Product", schema);
