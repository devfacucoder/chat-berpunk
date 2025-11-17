import { FaVolumeMute } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { MdOutlineChat } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

import { FiUser } from "react-icons/fi";
function PageContact() {
  return (
    <div className="w-full h-screen bg-black text-red-500 font-mono flex flex-col items-center pt-10">
      {/* Avatar + Nombre */}
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-[110px] h-[110px] rounded-2xl bg-black border border-red-600
          shadow-[0_0_20px_rgb(255,0,0)] flex items-center justify-center
          text-4xl font-bold text-red-400"
        >
          <FiUser fontSize={"50px"} />
        </div>

        <h1 className="text-3xl font-bold tracking-widest drop-shadow-[0_0_10px_rgb(255,0,0)]">
          Jonny Joestar
        </h1>

        <p className="text-red-400 text-lg tracking-widest drop-shadow-[0_0_6px_rgb(255,0,0)]">
          Número: 2494-123456
        </p>
      </div>

      {/* Línea divisoria */}
      <div className="w-[80%] h-[1px] flex bg-red-800/40 my-8 shadow-[0_0_12px_rgb(255,0,0)]" />

      {/* Opciones */}
      <div className="w-[80%] flex items-center justify-center gap-6">
        <div
          className="w-[60px] h-[60px] rounded-xl bg-black border border-red-600
            shadow-[0_0_15px_rgb(255,0,0)] flex items-center justify-center 
            text-red-400 text-2xl font-bold"
        >
          <FaVolumeMute />
        </div>
        <div
          className="w-[60px] h-[60px] rounded-xl bg-black border border-red-600
            shadow-[0_0_15px_rgb(255,0,0)] flex items-center justify-center 
            text-red-400 text-2xl font-bold"
        >
          <GiPadlock />
        </div>
        <div
          className="w-[60px] h-[60px] rounded-xl bg-black border border-red-600
            shadow-[0_0_15px_rgb(255,0,0)] flex items-center justify-center 
            text-red-400 text-2xl font-bold"
        >
          <IoIosContact />
        </div>
      </div>
      <div className="w-[80%] h-[1px] flex bg-red-800/40 my-8 shadow-[0_0_12px_rgb(255,0,0)]" />
        <button className="text-red-500">
            Borrar Contacto
        </button>


    </div>
  );
}

export default PageContact;
