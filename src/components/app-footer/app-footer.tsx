import { FC } from "react";
import { NavLink } from "react-router-dom";

import stylesAppFooter from "./app-footer.module.css";

import { copyright } from "../utils/data";

const AppFooter: FC = () => {
  return (
    <footer className={stylesAppFooter.footerContainer}>
      <p className={stylesAppFooter.copyright}>{copyright}</p>
      <nav className={stylesAppFooter.menu}>
        <ul className={stylesAppFooter.list}>
          <li>
            <NavLink to="#" className={stylesAppFooter.listItem}>
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className={stylesAppFooter.listItem}>
              Оклейка автомобилей
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className={stylesAppFooter.listItem}>
              Детейлинг автомобилей
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className={stylesAppFooter.listItem}>
              Галерея работ
            </NavLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export { AppFooter };
