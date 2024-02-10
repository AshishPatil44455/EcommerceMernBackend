import express from "express";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";

//importing routes
import userRoutes from "./routes/user.js";
import productRoute from "./routes/products.js";

const port = 3000;

connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api working with /api/v1");
});

//using routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/product", productRoute);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
