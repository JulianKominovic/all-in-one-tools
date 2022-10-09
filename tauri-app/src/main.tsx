import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { MantineProvider } from "@mantine/core";
//
// import "./globals/utils.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
