import { Router } from "express";
import { validatorHandler } from "../middlewares/validator.handler.js";
import { exampleShema } from "../schemas/example.schema.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Ejemplo de API REST con Node.js");
});

router.get("/saludo", validatorHandler(exampleShema, "query"), (req, res) => {
  res.json({
    message: "Hola mundo, desde una API REST con Node.js",
  });
});

export default router;
