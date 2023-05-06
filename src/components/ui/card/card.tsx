import { FC } from "react";

import stylesCard from "./card.module.css";

import { Button } from "../button/button";
import rectangles from '../../../images/decoration_rect.svg'

interface ICard {
  title: string;
  text: string;
  buttonText?: string;
}
const Card: FC<ICard> = ({ title, text, buttonText = "" }) => {
  return (
    <div className={stylesCard.container}>
      <h1 className={stylesCard.title}>{title}</h1>
    <img className={stylesCard.divider} src={rectangles} alt="разделитель" />
      <p className={stylesCard.text}>{text}</p>
      <Button text={buttonText} type="small" />
    </div>
  );
};

export { Card };
