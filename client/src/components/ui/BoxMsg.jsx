function BoxMsg({ side = "left",text="mensaje" }) {
  return (
    <div
      className={`w-fit max-w-[80%] ${
        side == "left" ? "self-start" : "self-end"
      } border border-red-600 
            bg-black/40 p-3 rounded-lg 
            shadow-[0_0_12px_rgba(255,0,0,0.6)]
            backdrop-blur-sm`}
    >
      {text}
    </div>
  );
}

export default BoxMsg;
