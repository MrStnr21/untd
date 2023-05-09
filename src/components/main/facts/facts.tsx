import { FC } from "react";

import stylesFacts from "./facts.module.css";

import { materialsText, experienceText, garantyText } from "../../utils/data";

import { ArticleFacts } from "./article-facts/article-facts";

import listIcon from "../../../images/icons/list_icon.svg";
import pshikIcon from "../../../images/icons/pshik_icon.svg";
import carIcon from "../../../images/icons/car_icon.svg";
import carImageWrap from "../../../images/facts-image/facts_car.png";
import CarImageDet from "../../../images/facts-image/Mercedes.png";

import { Carousel } from "@trendyol-js/react-carousel";
import { ButtonScroll } from "../../ui/button-scroll/button-scroll";

interface iFacts {
  type: string;
}

const Facts: FC<iFacts> = ({ type }): JSX.Element => {
  const elementPosition = type === "detailing" ? stylesFacts.reverse : null;
  const materialText = type === "wrap" ? materialsText : garantyText;
  const garText = type === "wrap" ? garantyText : materialsText;
  const imageElement = type === "wrap" ? carImageWrap : CarImageDet;
  const carouselText = type === "wrap" ? materialsText : garantyText;

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
      <div className={stylesFacts.examplesContainer}>
        <img className={stylesFacts.image} src={imageElement} alt="картинка" />
        <Carousel
          show={1}
          slide={1}
          transition={0.3}
          responsive={true}
          swiping={true}
          leftArrow={<ButtonScroll direction={"left"} />}
          rightArrow={<ButtonScroll direction={"right"} />}
          className={stylesFacts.carousel}
        >
          <p className={stylesFacts.carouselItem}>{carouselText}</p>
          <p className={stylesFacts.carouselItem}>{carouselText}</p>
          <p className={stylesFacts.carouselItem}>{carouselText}</p>
        </Carousel>
      </div>
    </section>
  );
};

export { Facts };
