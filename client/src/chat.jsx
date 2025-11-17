// Chat.jsx
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

export default function Chat() {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);
  const [name, setName] = useState("");
  const [ide, setIde] = useState("");

  // Escuchar mensajes recibidos
  useEffect(() => {
    socket.on("mensaje", (msg) => {
      setMensajes((prev) => [...prev, msg]);
    });

    return () => socket.off("mensaje");
  }, []);

  // Enviar mensaje global
  const enviarMensaje = (e) => {
    e.preventDefault();

    socket.emit("mensaje", { usuario: name, texto: mensaje });
    setMensaje("");
  };

  // LOGIN → Registrar usuario por ID
  const login = () => {
    socket.emit("registrarUsuario", ide);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-orange-600 text-white h-screen">
      <h1 className="text-2xl mb-4">💬 Chat en tiempo real</h1>

      {/* CONTENEDOR DE MENSAJES */}
      <div className="bg-orange-800 w-full max-w-md p-4 rounded-lg h-96 overflow-y-auto">
        {mensajes.map((msg, i) => (
          <p key={i}>
            <b>{msg.usuario}:</b> {msg.texto}
          </p>
        ))}
      </div>

      {/* LOGIN */}
      <div className="mt-4 w-full max-w-md flex">
        <input
          type="text"
          onChange={(e) => setIde(e.target.value)}
          placeholder="Tu ID"
          className="p-2 bg-orange-700 text-white rounded-l-lg"
        />
        <button onClick={login} className="bg-orange-900 px-4 rounded-r-lg">
          Login
        </button>
      </div>

      {/* FORM ENVIAR MENSAJE */}
      <form onSubmit={enviarMensaje} className="mt-4 w-full max-w-md flex">
        <input
          className="flex-1 p-2 rounded-l-lg bg-orange-700 outline-none text-white"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Escribe un mensaje..."
        />
        <button type="submit" className="bg-orange-900 px-4 rounded-r-lg">
          Enviar
        </button>
      </form>
    </div>
  );
}
