import express from "express";
import { singleUpload } from "../middlewares/multer.js";
import { newProduct } from "../controllers/product.js";
const app = express.Router();
app.post("/new", singleUpload, newProduct);
export default app;
