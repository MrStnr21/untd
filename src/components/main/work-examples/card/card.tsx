import { FC } from "react";

import stylesExampleCard from "./card.module.css";

interface IExampleCard {
  image: string;
  text: string;
}

const ExampleCard: FC<IExampleCard> = ({ image, text }): JSX.Element => {
  return (
    <div className={stylesExampleCard.container}>
      <img src={image} alt="картинка" />
      <div className={stylesExampleCard.background}></div>
      <p className={stylesExampleCard.text}>{text}</p>
    </div>
  );
};

export { ExampleCard };
