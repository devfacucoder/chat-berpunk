function AddContact({ onClose }) {
  return (
    <div className="fixed z-10 w-screen left-0  h-screen bg-black/50 flex items-center justify-center font-mono">
      <form
        className="w-[90%] max-w-md bg-black/40 border border-red-700 
        rounded-xl p-6 shadow-[0_0_20px_rgb(255,0,0)]
        flex flex-col gap-6"
      >
        <h2
          className="text-red-500 text-2xl font-bold tracking-widest 
          drop-shadow-[0_0_8px_rgb(255,0,0)]"
        >
          Agregar Contacto
        </h2>

        {/* Campo */}
        <div className="flex flex-col gap-2">
          <label
            className="text-red-400 text-sm tracking-wider 
            drop-shadow-[0_0_6px_rgb(255,0,0)]"
          >
            Número de contacto
          </label>

          <input
            type="text"
            className="bg-black border border-red-700 p-3 rounded-lg
            text-red-400 focus:outline-none
            shadow-[0_0_10px_rgb(255,0,0)]
            placeholder:text-red-800
            focus:border-red-400 transition"
            placeholder="Ej: 2494123456"
          />
        </div>

        <button
          className="w-full bg-red-800 py-3 rounded-lg text-black font-bold 
          shadow-[0_0_12px_rgb(255,0,0)]
          hover:bg-red-600 hover:shadow-[0_0_20px_rgb(255,50,50)]
          transition text-xl tracking-widest"
        >
          Agregar
        </button>
        <button
          onClick={() => {
            onClose(false);
          }}
          className="w-full bg-black py-3 rounded-lg text-red-800 font-bold 
          shadow-[0_0_12px_rgb(255,0,0)] border border-red-800
          hover:bg-red-600 hover:shadow-[0_0_20px_rgb(255,50,50)]
          transition text-xl tracking-widest"
        >
          Cerrar
        </button>
      </form>
    </div>
  );
}

export default AddContact;
