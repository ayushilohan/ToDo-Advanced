import React, { useState } from "react";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testing from "./pages/Testing";

// to import - react-redux, react-router-dom

function App() {
  const [show, setShow]= useState(true);
  const showHandler = ()=>{
    setShow(!show);
  }
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Header />} />
        <Route path="/header" element={<Header />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      </BrowserRouter>
      {/* {show && <Testing />}
      <button  onClick={showHandler}>Click me</button> */}
    </div>
  );
}

export default App;
