import { FC } from "react";

import stylesButton from "./button.module.css";

interface IButton {
  text: string;
}

const Button: FC<IButton> = ({ text }): JSX.Element => {
  return (
    <button className={stylesButton.button}>
      <p className={stylesButton.text}>{text}</p>
    </button>
  );
};

export { Button };
