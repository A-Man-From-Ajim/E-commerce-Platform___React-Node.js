import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot
import App from "./App";
import "./index.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById("root")); // Create root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
