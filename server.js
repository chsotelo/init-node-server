import express from "express";
import http from "http";
import cors from "cors";
import morgan from "morgan";
import routerApi from "./routes/index.js";
import bodyParser from "body-parser";
import {
  logErrors,
  boomErrorHandler,
  errorHandler,
} from "./middlewares/error.handler.js";
import { authenticateJWT } from "./middlewares/auth.handler.js";
import { connectDB } from "./libs/db.js";

const server = express();
const app = http.createServer(server);
server.use(bodyParser.json({ limit: "5mb" }));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const whitelist = [
  "http://localhost:8000",
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",
  "http://localhost:5000",
  "https://storage.googleapis.com",
  "https://accounts.google.com",
];

const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("no permitido"));
    }
  },
};
server.use(cors(options));
// connectDB();  // Conexión a MongoDB
server.get("/", (req, res) => {
  res.send("Hola mundo");
});

// server.use(authenticateJWT);
routerApi(server);
server.use(morgan("combined")); //dev, tiny, common
server.use(logErrors);
server.use(boomErrorHandler);
server.use(errorHandler);

export { app };
