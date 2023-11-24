import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
	authSource: "admin",
}).then(() => {
	console.log("Connected to DB")
});

export default mongoose;