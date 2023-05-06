import { FC, useState } from "react";

import stylesServices from "./services.module.css";

import { Title } from "../../ui/title/title";
import { Button } from "../../ui/button/button";
import { Card } from "../../ui/card/card";
import { exampleText } from "../../utils/data";

const Services: FC = (): JSX.Element => {
  const [activeWrap, setActiveWrap] = useState<boolean>(true);
  const [activeDeatiling, setActiveDeatiling] = useState<boolean>(false);

  const activeStyleWrap = activeWrap ? stylesServices.active : null;
  const activeStyleDetailing = activeDeatiling ? stylesServices.active : null;

  const wrapCards = (
    <div className={`${stylesServices.cardsContainer} ${activeStyleWrap}`}>
      <Card title="Защитные пленки" text={exampleText} buttonText="подробнее" />
      <Card title="Цветные пленки" text={exampleText} buttonText="подробнее" />
      <Card title="Дизайн" text={exampleText} buttonText="подробнее" />
      <Card title="Оклейка салона" text={exampleText} buttonText="подробнее" />
    </div>
  );

  const detailingCards = (
    <div className={`${stylesServices.cardsContainer} ${activeStyleDetailing}`}>
      <Card
        title="Керамическое покрытие"
        text={exampleText}
        buttonText="подробнее"
      />
      <Card
        title="восстановительная полировка"
        text={exampleText}
        buttonText="подробнее"
      />
      <Card
        title="химчистка салона"
        text={exampleText}
        buttonText="подробнее"
      />
      <Card title="озонация" text={exampleText} buttonText="подробнее" />
    </div>
  );

  const onHandleWrap = () => {
    setTimeout(() => {
      setActiveWrap(true);
    }, 0);
    setActiveDeatiling(false);
  };

  const onHandleDetailing = () => {
    setTimeout(() => {
      setActiveDeatiling(true);
    }, 0);
    setActiveWrap(false);
  };

  return (
    <section className={stylesServices.container}>
      <Title text="Наши услуги" />
      <div className={stylesServices.buttonContainer}>
        <Button
          text="Оклейка"
          type="standart"
          active={activeWrap}
          onClick={onHandleWrap}
        />
        <Button
          text="Детейлинг"
          type="standart"
          active={activeDeatiling}
          onClick={onHandleDetailing}
        />
      </div>
      {activeWrap ? wrapCards : detailingCards}
    </section>
  );
};

export { Services };
