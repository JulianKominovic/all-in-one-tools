import { useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import JsonToTs from "./modules/jsonToTs";
import Sidebar from "./ui/layout/Sidebar";
import sidebar from "./config/sidebar";
import "./index.css";
import routes, { BASE_URLS } from "./config/routes";
import Header from "./ui/layout/Header";
import HeaderItems from "./config/header";
import Home from "./modules/home";
import Playground from "./modules/playground";

function Router() {
  const [selectedItem, setSelectedItem] = useState(null);
  const { pathname } = useLocation();

  return (
    <div className="layout-wrapper layout-static layout-theme-light">
      <div className="layout-topbar">
        <Header currentPath={pathname} items={HeaderItems}></Header>
      </div>
      <Sidebar
        items={sidebar}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <div className="layout-main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={BASE_URLS.PARSERS_BASE_URL}>
            <Route path={routes.JSON_TO_TS.url} element={<JsonToTs />} />
          </Route>
          <Route path={BASE_URLS.PLAYGROUND_BASE_URL}>
            <Route
              path={routes.PLAYGROUND_JS.url}
              element={<Playground compileType="babel" />}
            />
            <Route
              path={routes.PLAYGROUND_TS.url}
              element={<Playground compileType="tsc" />}
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default Router;
