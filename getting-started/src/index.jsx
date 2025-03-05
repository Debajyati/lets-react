import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App.jsx";
import "./index.css";
import { entryPoint } from "./entryPoint.jsx";

ReactDOM.createRoot(entryPoint).render(<App />);
