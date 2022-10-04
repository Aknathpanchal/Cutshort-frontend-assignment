import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StepContextProvider } from "./Context/StepContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StepContextProvider>
      <BrowserRouter>
       
          <App />
      
      </BrowserRouter>
    </StepContextProvider>
  </React.StrictMode>
);
