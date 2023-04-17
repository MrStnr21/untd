import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import stylesApp from "./app.module.css";

import { MainPage } from "../../pages";

import { routesUrl } from "../utils/routesData";

const App: FC = (): JSX.Element => {
  return (
    <section className={stylesApp.container}>
      <Routes>
        <Route path={routesUrl.homePage} element={<MainPage />} />
      </Routes>
    </section>
  );
};

export { App };
