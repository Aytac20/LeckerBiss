import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <ToastContainer
        style={{
          fontSize: "1.2rem",
        }}
      />
    </>
  );
};
export default App;
