import jwt from "jsonwebtoken";
import boom from "@hapi/boom";
import { config } from "../config/config.js";

const authenticateJWT = (req, res, next) => {
  // Obtener el token de autorización de la solicitud
  const authHeader = req.header("Authorization");

  // Verificar si se proporcionó un token
  if (!authHeader) return next(boom.unauthorized("Missing key"));
  if (!authHeader.startsWith("Bearer "))
    return next(boom.unauthorized('Token must start with "Bearer"'));

  // Obtener el token sin la palabra clave 'Bearer'
  const token = authHeader && authHeader.split(" ")[1];

  // Verificar y decodificar el token
  jwt.verify(token, config.accessJWTSecretToken, (err, user) => {
    if (err) return next(boom.unauthorized("Invalid key"));
    req.user = user;
    next();
  });
};

export { authenticateJWT };
