import { Link } from "react-router-dom";
function ItemContact({ name = "Jonny Joestar", letter = "A" }) {
  return (
    <Link to={"/mensage/23123"}>
      <li
        className="p-4 h-[90px] w-full flex items-center gap-4 cursor-pointer
border-b border-red-900/50 hover:bg-red-900/20
transition-all duration-200 group active:bg-red-950"
      >
        {/* Ícono / letra */}
        <div
          className="w-[60px] h-[60px] rounded-xl bg-black border border-red-600
        shadow-[0_0_12px_rgb(255,0,0)]
        flex items-center justify-center text-red-400
        text-2xl font-bold group-hover:shadow-[0_0_20px_rgb(255,50,50)]
        transition-all duration-300"
        >
          {letter}
        </div>

        {/* Nombre */}
        <p
          className="text-red-400 text-xl font-semibold tracking-wide
                   drop-shadow-[0_0_6px_rgb(255,0,0)]
                   group-hover:text-red-300 transition"
        >
          {name}
        </p>
      </li>
    </Link>
  );
}
import { IoPersonAddSharp } from "react-icons/io5";
import AddContact from "../forms/AddContact";
import { useState } from "react";
function ListContacts() {
  const [viewAddContact, setViewAddContact] = useState(false);
  return (
    <ul
      className="w-full h-screen overflow-y-auto bg-black text-red-500
                   shadow-inner shadow-red-900/40"
    >
      {viewAddContact ? <AddContact onClose={setViewAddContact} /> : null}
      <button
        onClick={() => {
          setViewAddContact(true);
        }}
        className="
    fixed bottom-6 right-6 
    text-black text-3xl 
    bg-red-600 p-4 
    rounded-full 
    shadow-[0_0_15px_rgb(255,0,0)]
    border border-red-800
    hover:bg-red-500 
    hover:shadow-[0_0_25px_rgb(255,50,50)]
    active:scale-95
    transition-all duration-200
  "
      >
        <IoPersonAddSharp />
      </button>

      <ItemContact />
      <ItemContact />
      <ItemContact />
      <ItemContact />
      <ItemContact />
      <ItemContact />
      <ItemContact />
      <ItemContact />
    </ul>
  );
}

export default ListContacts;
