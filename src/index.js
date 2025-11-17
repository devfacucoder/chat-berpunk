import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import mongoose from "./db.js";
const app = express();
app.use(cors());
app.use(express.json());
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });



import { getUsers, getUserByNum } from "./controllers/user.ctrl.js";

// 🔗 Guardamos qué socket pertenece a qué usuario
const conexiones = {}; // { userId: socketId }

io.on("connection", (socket) => {
  console.log("🟢 Nuevo cliente conectado:", socket.id);
  // Cuando el cliente se identifica con su ID
  socket.on("registrarUsuario", async (userId) => {
    const datausers = await getUsers();
    const usuario = datausers.find((u) => u.idNum === userId);

    if (!usuario) {
      console.log("❌ Usuario no encontrado");

      // Enviar respuesta al cliente
      socket.emit("respuestaRegistro", {
        status: "rechazado",
        mensaje: "ID incorrecto",
      });

      return;
    }

    // Guardar relación usuario ↔ socket
    conexiones[userId] = socket.id;
    socket.userId = userId;

    console.log(`✅ ${usuario.nickname} conectado con socket ${socket.id}`);

    // Enviar respuesta exitosa al cliente
    socket.emit("respuestaRegistro", {
      status: "aceptado",
      nickname: usuario.nickname,
      id: usuario.idNum,
      mensaje: "Acceso concedido",
    });
  });

  // 📨 Mensaje privado
  socket.on("mensajePrivado", async ({ de, para, mensaje }) => {
    const socketDestino = conexiones[para];

    // 1. Buscar usuario emisor desde Mongo
    const emisor = await getUserByNum(de);

    // 2. Buscar usuario receptor
    const destinatario = await getUserByNum(para);

    if (!destinatario) {
      console.log("❌ El usuario receptor NO existe");
      return;
    }

    if (!socketDestino) {
      console.log(`⚠️ El usuario ${para} existe pero NO está conectado`);
      return;
    }

    // 3. Enviar mensaje
    io.to(socketDestino).emit("mensajePrivado", {
      de: emisor?.nickname || emisor?.nombre || "Desconocido",
      mensaje,
    });

    console.log(`📨 ${de} → ${para}: ${mensaje}`);
  });

  // 🔴 Al desconectarse
  socket.on("disconnect", () => {
    if (socket.userId) {
      console.log(`🔴 Usuario ${socket.userId} desconectado`);
      delete conexiones[socket.userId];
    }
  });
});
import userRoutes from "./routes/user.routes.js";

app.use("/api/user", userRoutes);

server.listen(3000, () => console.log("🚀 Servidor Socket.io en puerto 3000"));
