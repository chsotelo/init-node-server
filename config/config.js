import dotenv from "dotenv";
dotenv.config();

const config = {
  env: process.env.NODE_ENV || "dev",
  port: process.env.SERVER_PORT || 3000,
  dbURI: process.env.DB_URI || "mongodb://localhost:27017/",
  accessJWTSecretToken: process.env.ACCESS_JWT_SECRET_TOKEN || "access",
};

export { config };
