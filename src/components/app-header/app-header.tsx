import { FC, useState } from "react";

import stylesAppHeader from "./app-header.module.css";

import dash from "../../images/dash.svg";
import { NavLink } from "react-router-dom";

const AppHeader: FC = (): JSX.Element => {
  const [burgerMenu, setBurgerMenu] = useState<boolean>(false);

  const handleBurgerMenu = (): void => {
    setBurgerMenu(!burgerMenu);
  };

  return (
    <header className={stylesAppHeader.header}>
      <div className={stylesAppHeader.menuContainer}>
        <nav className={stylesAppHeader.menu}>
          <ul
            className={`${stylesAppHeader.list} ${
              burgerMenu ? stylesAppHeader.listActive : null
            }`}
          >
            <li>
              <NavLink to="#" className={stylesAppHeader.listItem}>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className={stylesAppHeader.listItem}>
                Оклейка автомобилей
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className={stylesAppHeader.listItem}>
                Детейлинг автомобилей
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className={stylesAppHeader.listItem}>
                Галерея работ
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          className={stylesAppHeader.burgerMenu}
          onClick={handleBurgerMenu}
        >
          <img
            className={`${stylesAppHeader.buttonImage} ${
              burgerMenu ? stylesAppHeader.buttonImageActive : null
            }`}
            src={dash}
            alt="-"
          />
        </button>
      </div>
    </header>
  );
};

export { AppHeader };
