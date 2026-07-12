import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { Toaster } from "sonner";

import App from "./App";
import AppProviders from "./providers/AppProviders";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProviders>
      <App />
      <Toaster richColors position="top-right" />
    </AppProviders>
  </React.StrictMode>
);