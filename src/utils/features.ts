import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017", { dbName: "Ecommerce_MERN" })
    .then((c) =>
      console.log(`DB connected successfully to ${c.connection.host}`)
    )
    .catch((e) => console.log(e));
};
