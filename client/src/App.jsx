import { useState, createContext } from "react";
import Login from "./components/forms/Login";
import SendMesage from "./components/forms/SendMesage";
export const ctxCotact = createContext();

import ListContacts from "./components/layout/ListContacts";
import PageMensage from "./components/layout/PageMensage";
import AddContact from "./components/forms/AddContact";
import PageContact from "./components/layout/PageContact";

import { Route, Routes } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);
  const [sesionId, setSesionId] = useState("");
  const [contact, setContact] = useState({ view: false, contacts: [] });
  return (
    <ctxCotact.Provider value={[contact, setContact]}>
      <div className="bg-black flex flex-col  min-h-screen w-full">
        <aside className="hidden"></aside>
        <main className="px-4 w-full  h-screen flex items-center justify-center ">
          <Routes>
            <Route element={<ListContacts />} path="/" />

            <Route element={<Login />} path="/auth" />
            <Route element={<PageMensage />} path="/mensage/:idnum" />
            <Route element={<PageContact />} path="/contact/:idnum" />
          </Routes>
        </main>
      </div>
    </ctxCotact.Provider>
  );
}

export default App;
