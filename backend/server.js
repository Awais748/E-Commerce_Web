import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/User.Routes.js";
import productRouter from "./routes/Product.routes.js";
import cartRouter from "./routes/cart.route.js";
import orderRouter from "./routes/order.routes.js";
// app config
const app = express();
connectDB();
connectCloudinary();
// middlewares
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use('/api/order', orderRouter)




const port = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, (req, res) => {
  console.log(`Server is running on http://localhost:${port}`);
});
