const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());
//server.use((req, res, next) => {
//    const allowedOrigins = ["http://localhost:3001", "https://lighthearted-entremet-b6aec9.netlify.app/"];  // Añade otros dominios permitidos según sea necesario
//  
//    const origin = req.headers.origin;
//  
//    if (allowedOrigins.includes(origin)) {
//      res.header("Access-Control-Allow-Origin", origin);
//      res.header("Access-Control-Allow-Credentials", "true");
//      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//      res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//  
//      next();
//    } else {
//      // Dominio no permitido, puedes manejar esto enviando una respuesta 403 (Forbbiden) u otra acción
//      res.status(403).json({ error: "Dominio no permitido" });
//    }
//  });

server.use(router);

module.exports = server;
