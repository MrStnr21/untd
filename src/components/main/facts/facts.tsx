import { FC } from "react";

import stylesFacts from "./facts.module.css";

import { ArticleFacts } from "./article-facts/article-facts";

import { CardBig } from "../../ui/card-big/card-big";

import {
  bigCardText,
  bigCardTextAlt,
  materialsText,
  experienceText,
  garantyText,
} from "../../utils/data";

import listIcon from "../../../images/icons/list_icon.svg";
import pshikIcon from "../../../images/icons/pshik_icon.svg";
import carIcon from "../../../images/icons/car_icon.svg";
import carImageWrap from "../../../images/facts-image/facts_car.png";
import CarImageDet from "../../../images/facts-image/Mercedes.png";

interface iFacts {
  type: string;
}

const Facts: FC<iFacts> = ({ type }): JSX.Element => {
  const elementPosition = type === "detailing" ? stylesFacts.reverse : null;
  const materialText = type === "wrap" ? materialsText : garantyText;
  const garText = type === "wrap" ? garantyText : materialsText;
  const imageElement = type === "wrap" ? carImageWrap : CarImageDet;
  const carouselText = type === "wrap" ? bigCardText : bigCardTextAlt;

  return (
    <section className={`${stylesFacts.section} ${elementPosition}`}>
      <div className={stylesFacts.textContainer}>
        <ArticleFacts
          image={listIcon}
          title="материалы от лучших компаний"
          text={materialText}
          dividerBottom
        />
        <ArticleFacts
          image={pshikIcon}
          title="опытные мастера"
          text={experienceText}
          dividerBottom
        />
        <ArticleFacts
          image={carIcon}
          title="Гарантия на все виды работы"
          text={garText}
        />
      </div>
      <CardBig image={imageElement} textArr={carouselText} />
    </section>
  );
};

export { Facts };
