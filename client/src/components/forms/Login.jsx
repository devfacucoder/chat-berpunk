import { useState, useEffect, useContext, use } from "react";
import { socket } from "../../socket";
import { ctxCotact } from "../../App";
import { useNavigate } from "react-router-dom";
function Login({ set }) {
  const [ideNumer, setIdeNumber] = useState(null);
  const [contact, setContact] = useContext(ctxCotact);
  const handleLogin = (e) => {
    e.preventDefault();
    socket.emit("registrarUsuario", ideNumer);
    localStorage.setItem("user", ideNumer);
    set(ideNumer);
  };
  const navigate = useNavigate()
  useEffect(() => {
    socket.on("respuestaRegistro", (data) => {
      if (data.status === "aceptado") {
        console.log("Login correcto:", data);
        setContact((prev) => ({ ...prev, view: true }));
        alert("Bienvenido " + data.nickname);
        navigate("/")
      } else {
        setContact((prev) => ({ ...prev, view: false }));

        console.log("Login rechazado");
        alert("ID incorrecto");
      }
    });

    return () => socket.off("respuestaRegistro");
  }, []);
  return (
    <div className=" flex items-center w-full justify-center bg-black text-red-400">
      <form
        onSubmit={handleLogin}
        className="bg-[#0a0a0a] border border-red-600 shadow-[0_0_25px_rgb(255,0,0)] 
                   p-8 rounded-xl w-full max-w-sm flex flex-col gap-5"
      >
        {/* Título */}
        <h1 className="text-3xl font-bold text-red-500 drop-shadow-[0_0_10px_rgb(255,0,0)] text-center">
          🔻 Cyber Login
        </h1>

        {/* Input */}
        <div className="flex flex-col gap-2">
          <label className="text-red-400 tracking-widest font-semibold">
            ID DE ACCESO
          </label>

          <input
            required
            type="text"
            onChange={(e) => setIdeNumber(e.target.value)}
            className="bg-black text-red-300 p-3 rounded-lg border border-red-600 
                       focus:outline-none focus:border-red-500
                       shadow-[0_0_10px_rgb(255,0,0)]"
            placeholder="Escribe tu código..."
          />
        </div>

        {/* Botón */}
        <button
          className="mt-2 bg-red-700 text-black font-bold p-3 rounded-lg
                     hover:bg-red-500 transition shadow-[0_0_15px_rgb(255,50,50)]
                     active:scale-95"
        >
          ACCEDER
        </button>
      </form>
    </div>
  );
}

export default Login;
