import { FC } from "react";

import stulesButtonScroll from "./button-scroll.module.css";

import arrow from "../../../images/arrow-button.svg";

interface IButtonScroll {
  direction: string;
}

const ButtonScroll: FC<IButtonScroll> = ({ direction }) => {
  const styles =
    direction === "right" ? stulesButtonScroll.buttonImgRight : null;

  return (
    <button className={stulesButtonScroll.buttonScroll}>
      <img
        className={`${stulesButtonScroll.buttonImg} ${styles}`}
        src={arrow}
        alt="листать"
      />
    </button>
  );
};

export { ButtonScroll };
