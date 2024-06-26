import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import cookRoute from "./route/cook.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js"; // Add this line

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}

// defining routes
app.use("/cook", cookRoute);
app.use("/user", userRoute);
app.use("/api", contactRoute); // Add this line

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});
