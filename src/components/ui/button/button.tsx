import { FC } from "react";

import stylesButton from "./button.module.css";

interface IButton {
  text: string;
  active?: boolean;
  type?: string;
  onClick?: () => void;
}

const Button: FC<IButton> = ({ text, active, type, onClick }): JSX.Element => {
  const activeStyle = active ? stylesButton.active : null;
  const typeButton =
    type === "standart"
      ? stylesButton.buttonStandart
      : type === "small"
      ? stylesButton.buttonSmall
      : null;

  return (
    <button
      className={`${stylesButton.button} ${activeStyle}`}
      onClick={onClick}
    >
      <p className={`${stylesButton.text} ${typeButton}`}>{text}</p>
    </button>
  );
};

export { Button };
