import { IoSendOutline } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import BoxMsg from "../ui/BoxMsg";
import { Link } from "react-router-dom";
function PageMensage() {
  return (
    <div className="h-screen w-full font-mono bg-black text-red-400">
      {/* HEADER */}
      <div
        className="h-[12%] w-full flex items-center justify-between 
        px-4 border-b border-red-700 
        shadow-[0_0_20px_rgba(255,0,0,0.4)] relative"
      >
        {/* Glow superior */}
        <div
          className="absolute top-0 left-0 w-full  
          bg-red-600 shadow-[0_0_15px_rgb(255,0,0)]"
        />

        {/* Perfil */}
        <Link to={"/contact/231"}>
          <div className="flex items-center gap-4">
            <div
              className="w-[60px] h-[60px] rounded-xl bg-black border border-red-600
            shadow-[0_0_15px_rgb(255,0,0)] flex items-center justify-center 
            text-red-400 text-2xl font-bold"
            >
              J
            </div>

            <p
              className="text-xl font-semibold tracking-wide
            drop-shadow-[0_0_6px_rgb(255,0,0)]"
            >
              Jonny
            </p>
          </div>
        </Link>

        <button
          className="text-red-400 border border-red-600 w-[45px] h-[45px]
            rounded-lg flex items-center justify-center 
            shadow-[0_0_12px_rgb(255,0,0)]
            hover:bg-red-800/30 transition
            "
        >
          <IoMdMore />
        </button>
      </div>

      {/* MENSAJES */}
      <div className="w-full h-[78%] overflow-y-auto p-4 space-y-4 flex flex-col">
        <BoxMsg text={"hola buen dia"} />
        <BoxMsg text={"pinta lol cabeza de pingo"} />
        <BoxMsg />
        <BoxMsg />
        <BoxMsg side="right" />
      </div>

      {/* INPUT */}
      <div
        className="h-[10%] w-full flex items-center gap-2 
        px-3 bg-black border-t border-red-700
        shadow-[0_0_20px_rgba(255,0,0,0.3)]"
      >
        <textarea
          placeholder="▌Escribe un mensaje…"
          className="w-[80%] h-[70%] resize-none bg-gray-950 border border-red-700 
            text-red-400 p-2 rounded-lg outline-none
            shadow-[0_0_12px_rgb(255,0,0)] placeholder:text-red-700/60"
        ></textarea>

        <button
          className="w-[20%] h-[70%] bg-gradient-to-b from-red-800 to-red-600 
            border border-red-900 rounded-lg 
            text-black font-bold text-xl tracking-wide
            shadow-[0_0_20px_rgb(255,0,0)] 
            hover:from-red-600 hover:to-red-400 transition
            flex items-center justify-center
            "
        >
          <IoSendOutline />
        </button>
      </div>
    </div>
  );
}

export default PageMensage;
