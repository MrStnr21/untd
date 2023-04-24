import { FC } from "react";

import stylesWelcome from "./welcome.module.css";

import backgroundImage from "../../../images/porsche_bg.webp";

import { AppHeader } from "../../app-header/app-header";
import { Button } from "../../ui/button/button";

const Welcome: FC = (): JSX.Element => {
  return (
    <section className={stylesWelcome.container}>
      <div
        className={stylesWelcome.background}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <AppHeader />
      <div className={stylesWelcome.titleWrapper}>
        <div className={stylesWelcome.titleContainer}>
          <h1 className={stylesWelcome.title}>untd</h1>
          <h2 className={stylesWelcome.sign}>detailng</h2>
          <h3 className={stylesWelcome.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae orci
            urna amet penatibus.
          </h3>
          <Button text={"Наши услуги"} />
        </div>
      </div>
      <div className={stylesWelcome.infoContainer}>
        <div className={stylesWelcome.infoItem}>
          <h2 className={stylesWelcome.infoTitle}>адрес:</h2>
          <p className={stylesWelcome.infoText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div className={stylesWelcome.infoItem}>
          <h2 className={stylesWelcome.infoTitle}>телефон:</h2>
          <p className={stylesWelcome.infoText}>+7(777)777-77-77</p>
          <p className={stylesWelcome.infoText}>+7(666)666-66-66</p>
        </div>
        <div className={stylesWelcome.infoItem}>
          <h2 className={stylesWelcome.infoTitle}>Режим работы:</h2>
          <p className={stylesWelcome.infoText}>пн-пт : 10:00 - 20:00</p>
          <p className={stylesWelcome.infoText}>сб-вск : 12:00 - 20:00</p>
        </div>
      </div>
    </section>
  );
};

export { Welcome };
