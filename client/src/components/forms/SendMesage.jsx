import { useState,useEffect } from "react";
import { socket } from "../../socket";

function SendMesage({ide}) {
  const [destino, setDestino] = useState("");
  const [mesage, setMesage] = useState("");
  const handleSendMesage = (e) => {
    e.preventDefault()
    socket.emit("mensajePrivado", {
      de: ide,
      para: destino,
      mensaje: mesage,
    });
  };
  const [mensajesRecibidos, setMensajesRecibidos] = useState([]);

  useEffect(() => {
    // 🔥 Escuchar mensaje privado que te llega
    socket.on("mensajePrivado", ({ de, mensaje }) => {
      console.log("📩 Nuevo mensaje:", de, mensaje);

      setMensajesRecibidos((prev) => [
        ...prev,
        { de, mensaje }
      ]);
    });

    return () => {
      socket.off("mensajePrivado");
    };
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-red-400">
      <form
      onSubmit={handleSendMesage}
        className="bg-[#0a0a0a] border border-red-600 shadow-[0_0_25px_rgb(255,0,0)]
                   p-8 rounded-xl w-full max-w-md flex flex-col gap-5"
      >
        {/* Título */}
        <h1 className="text-3xl font-bold text-red-500 drop-shadow-[0_0_10px_rgb(255,0,0)] text-center">
          🔻 Enviar Mensaje
        </h1>

        {/* ID destino */}
        <div className="flex flex-col gap-2">
          <label className="text-red-400 tracking-widest font-semibold">
            ID DESTINO
          </label>

          <input
            type="text"
            onChange={(e) => {
              setDestino(e.target.value);
            }}
            className="bg-black text-red-300 p-3 rounded-lg border border-red-600
                       focus:outline-none focus:border-red-500
                       shadow-[0_0_10px_rgb(255,0,0)]"
            placeholder="ID del usuario..."
          />
        </div>

        {/* Mensaje */}
        <div className="flex flex-col gap-2">
          <label className="text-red-400 tracking-widest font-semibold">
            MENSAJE
          </label>

          <textarea
            onChange={(e) => {
              setMesage(e.target.value);
            }}
            rows="5"
            className="bg-black text-red-300 p-3 rounded-lg border border-red-600 
                       focus:outline-none focus:border-red-500 resize-none
                       shadow-[0_0_10px_rgb(255,0,0)]"
            placeholder="Escribe tu mensaje..."
          ></textarea>
        </div>

        {/* Botón */}
        <button
          type="submit"
          className="mt-2 bg-red-700 text-black font-bold p-3 rounded-lg
                     hover:bg-red-500 transition shadow-[0_0_15px_rgb(255,50,50)]
                     active:scale-95"
        >
          ENVIAR
        </button>
      </form>
      <div className="mt-10 p-5 bg-[#111] border border-red-600 rounded-xl">
  <h2 className="text-red-500 text-xl font-bold mb-3">📨 Mensajes recibidos</h2>

  {mensajesRecibidos.length === 0 && (
    <p className="text-red-400">Aún no hay mensajes...</p>
  )}

  <ul className="flex flex-col gap-3">
    {mensajesRecibidos.map((m, i) => (
      <li key={i} className="p-3 bg-black border border-red-700 rounded-lg">
        <p className="text-red-300">
          <span className="font-bold text-red-500">{m.de}:</span> {m.mensaje}
        </p>
      </li>
    ))}
  </ul>
</div>
    </div>
  );
}

export default SendMesage;
