import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import { ContextProvider } from "./context/Context"

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
