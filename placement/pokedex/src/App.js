import React, { useState } from "react";
import Main from "./Components/Main";
import "./Components/style.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Pokeinfo from "./Components/Pokeinfo";
function App() {
  const [data,setData]=useState()
  return (
    <>
      <Routes>
        <Route path="/" element={<Main newData={setData} />} />
        <Route path="/pokeinfo/:pokemonId" element={<Pokeinfo data={data} />} />
      </Routes>
      {/* <Main/> */}
    </>
  );
}

export default App;
