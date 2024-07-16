import express from "express";
import ejemploRouter from "./example.router.js";

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/example", ejemploRouter);
}

export default routerApi;
