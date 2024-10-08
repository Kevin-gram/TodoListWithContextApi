import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { TodoProvider } from "./Contexts/TodoContext/index.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodoProvider>
      <App className="bg-green-200" />
    </TodoProvider>
  </StrictMode>
);
