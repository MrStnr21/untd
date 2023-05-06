import { FC } from "react";

import stylesTitle from "./title.module.css";

import rectangles from "../../../images/decoration_rect.svg";

interface ITitle {
  text: string;
}

const Title: FC<ITitle> = ({ text }): JSX.Element => {
  return (
    <div className={stylesTitle.titleContainer}>
      <h1 className={stylesTitle.title}>{text}</h1>
      <img className={stylesTitle.divider} src={rectangles} alt="разделитель" />
    </div>
  );
};

export { Title };
