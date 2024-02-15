import mongoose from "mongoose";
const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
    },
    Photo: {
        type: String,
        required: [false, "Product photo is required"],
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
    },
    stock: {
        type: Number,
        required: [true, "Product stock is required"],
    },
    category: {
        type: String,
        required: [true, "Product category is required"],
        trim: true,
    },
}, {
    timestamps: true,
});
export const Product = mongoose.model("Product", schema);
