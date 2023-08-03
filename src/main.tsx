import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { TodosProvideer } from "./store/contextTodo.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodosProvideer>
      <App />
    </TodosProvideer>
  </React.StrictMode>
);
