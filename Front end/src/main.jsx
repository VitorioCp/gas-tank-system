import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes } from "./routes/index.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
    
  </React.StrictMode>
);
