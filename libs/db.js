import mongoose from "mongoose";
import { config } from "../config/config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(config.dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión a MongoDB exitosa");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1);
  }
};
